import styles from "./ChatSection.module.css";
import TextField from "@mui/material/TextField";

export const ChatSection = () => {
  return (
    <TextField
      className={styles.messageInput}
      variant="filled"
      aria-label="maximum height"
      placeholder="Enter message..."
    />
  );
};
