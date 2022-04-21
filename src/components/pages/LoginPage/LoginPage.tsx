import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Logo } from "components";
import styles from "./LoginPage.module.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import classnames from "classnames";
import { useEffect } from "react";
import { useAuth } from "contexts";
import { Link, useNavigate } from "react-router-dom";

type UserToFirebase = {
  emailAddress: string;
  password: string;
};

interface IFormInput {
  emailAddress: string;
  password: string;
}

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();
  const { currentUser, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, []);

  const classNameList = {
    emailAddress: classnames(styles.input, {
      [styles.error]: errors.emailAddress,
    }),
    password: classnames(styles.input, { [styles.error]: errors.password }),
  };

  const createAccount: SubmitHandler<IFormInput> = async ({
    emailAddress,
    password,
  }) => {
    setLoading(true);
    // if (password !== passwordConfirmation) return;
    try {
      await login(emailAddress, password);
      navigate("/chat");
    } catch {
      console.log("Can't to log in");
    }
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Box className={styles.background}>
      <Box className={styles.contentBox}>
        <Logo height={100} />
        <h3 className={styles.header}>Log in</h3>
        <form
          className={styles.formGroup}
          onSubmit={handleSubmit(createAccount)}
        >
          <Controller
            name="emailAddress"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type={"email"}
                className={classNameList.emailAddress}
                placeholder="Email Address..."
                {...register("emailAddress", {
                  required: {
                    value: true,
                    message: "Field is required.",
                  },
                })}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="emailAddress"
            render={({ message }) => (
              <p className={styles.errorMessage}>{message}</p>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={classNameList.password}
                placeholder="Password..."
                type={"password"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Field is required.",
                  },
                })}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className={styles.errorMessage}>{message}</p>
            )}
          />
          <button disabled={loading} type="submit" className={styles.button}>
            Log In
          </button>
        </form>
        <p>
          Need an account?{" "}
          <Link className={styles.link} to={"/signup"}>
            Sign up
          </Link>
        </p>
        <p className={styles.copyright}>Copyright ©CodersCamp 2021</p>
      </Box>
    </Box>
  );
};
