import { Box, Typography } from "@mui/material";
import { Logo } from "components";
import styles from "./WelcomePage.module.css";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Box className={styles.background}>
      <Logo className={styles.logoMargin} height={160} />
      <Box className={styles.textBackground}>
        <Typography className={styles.text} variant="h3" fontWeight={700}>
          Want to stay{` `}
          <Box component="span" className={styles.colorText}>
            in
          </Box>
          Touch with friends?
        </Typography>
      </Box>
      <Box className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </Box>
    </Box>
  );
};
