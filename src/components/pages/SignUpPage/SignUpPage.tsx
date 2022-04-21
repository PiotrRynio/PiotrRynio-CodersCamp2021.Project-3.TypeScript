import { useState } from "react";
import { Box } from "@mui/material";
import { Logo } from "components";
import styles from "./SignUpPage.module.css";

export const SignUpPage = () => {
  const [progress, setProgress] = useState<Number>(1);

  return (
    <Box className={styles.background}>
      <Box className={styles.contentBox}>
        <Logo height={100} />
        {/*<ProgresBars />*/}
        <h3>SignUp</h3>
        <form className={styles.formGroup}>
          <input className={styles.input} placeholder={"First Name..."} />
          <input className={styles.input} placeholder={"Last Name..."} />
          <input
            type={"email"}
            className={styles.input}
            placeholder={"Email Address..."}
          />
          <input
            type={"password"}
            className={styles.input}
            placeholder={"Password..."}
          />
          <input
            type={"password"}
            className={styles.input}
            placeholder={"Password Confirmation..."}
          />
          <button className={styles.button}>Next</button>
        </form>
        <p>Already have an account? Sign In.</p>
        <p className={styles.copyright}>Copyright ©CodersCamp 2021</p>
      </Box>
    </Box>
  );
};
