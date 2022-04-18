import { Box, Button, Typography } from "@mui/material";
import { Logo } from "components";
import styles from "./WelcomePage.module.css";

export const WelcomePage = () => {
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
        <Button variant="outlined" className={styles.button}>
          Sign in
        </Button>
        <Button variant="outlined" className={styles.button}>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
