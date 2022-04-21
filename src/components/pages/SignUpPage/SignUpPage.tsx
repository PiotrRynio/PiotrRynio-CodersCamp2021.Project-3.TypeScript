import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Logo } from "components";
import styles from "./SignUpPage.module.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import classnames from "classnames";
import { useEffect } from "react";
import { useAuth, useDatabase } from "contexts";
import { Link, useNavigate } from "react-router-dom";

type UserToFirebase = {
  emailAddress: string;
  password: string;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  passwordConfirmation: string;
}

export const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();
  const { currentUser, signUp } = useAuth();
  const { addUserToDatabase } = useDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, []);

  const classNameList = {
    firstName: classnames(styles.input, { [styles.error]: errors.firstName }),
    lastName: classnames(styles.input, { [styles.error]: errors.lastName }),
    emailAddress: classnames(styles.input, {
      [styles.error]: errors.emailAddress,
    }),
    password: classnames(styles.input, { [styles.error]: errors.password }),
    passwordConfirmation: classnames(styles.input, {
      [styles.error]: errors.passwordConfirmation,
    }),
  };

  const createAccount: SubmitHandler<IFormInput> = async ({
    firstName,
    lastName,
    emailAddress,
    password,
    passwordConfirmation,
  }) => {
    setLoading(true);
    if (password !== passwordConfirmation) return;
    try {
      const { user: createdUser } = await signUp(emailAddress, password);
      const newUser = {
        firstName,
        lastName,
        emailAddress,
        id: createdUser.uid,
      };
      await addUserToDatabase(newUser);
      setLoading(false);
      navigate("/chat");
    } catch {
      console.log("Can't to create an account");
    }
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Box className={styles.background}>
      <Box className={styles.contentBox}>
        <Logo height={100} />
        <h3 className={styles.header}>SignUp</h3>
        <form
          className={styles.formGroup}
          onSubmit={handleSubmit(createAccount)}
        >
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={classNameList.firstName}
                placeholder="First Name..."
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Field is required.",
                  },
                  pattern: {
                    value: /.*[^\s].*/,
                    message: "Sorry, you cannot send only white spaces",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Sorry, your first name shouldn't exceed 30 characters",
                  },
                })}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => (
              <p className={styles.errorMessage}>{message}</p>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={classNameList.lastName}
                placeholder="Last Name..."
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Field is required.",
                  },
                  pattern: {
                    value: /.*[^\s].*/,
                    message: "Sorry, you cannot send only white spaces",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Sorry, your last name shouldn't exceed 50 characters",
                  },
                })}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => (
              <p className={styles.errorMessage}>{message}</p>
            )}
          />
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
                  maxLength: {
                    value: 100,
                    message:
                      "Sorry, your email shouldn't exceed 100 characters",
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
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Your password should, have minimum eight characters, at least one letter and one number",
                  },
                  maxLength: {
                    value: 32,
                    message:
                      "Sorry, your password shouldn't exceed 32 characters",
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
          <Controller
            name="passwordConfirmation"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={classNameList.passwordConfirmation}
                placeholder="Password Confirmation..."
                type={"password"}
                {...register("passwordConfirmation", {
                  required: {
                    value: true,
                    message: "Field is required.",
                  },
                  pattern: {
                    value: new RegExp(getValues("password")),
                    message: "Your passwords are different",
                  },
                })}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="passwordConfirmation"
            render={({ message }) => (
              <p className={styles.errorMessage}>{message}</p>
            )}
          />
          <button disabled={loading} type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className={styles.link} to={"/login"}>
            Log In
          </Link>
        </p>
        <p className={styles.copyright}>Copyright ©CodersCamp 2021</p>
      </Box>
    </Box>
  );
};
