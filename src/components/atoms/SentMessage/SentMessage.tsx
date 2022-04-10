import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./SentMessage.module.scss";

export const SentMessage = () => {
  return (
    <Box className={styles.messageContent}>
      <Typography variant="body1" noWrap component="div">
        Sample message
      </Typography>
    </Box>
  );
};
