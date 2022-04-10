import styles from "./ChatSection.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

export const ChatSection = () => {
  return (
    <>
      <Box className={styles.chatHeader}>HEADER</Box>
      <Box className={styles.newMessageSection}>
        <TextField
          className={styles.messageInput}
          aria-label="maximum height"
          placeholder="Enter message..."
          variant="filled"
          multiline
          maxRows="6"
        />

        <Button
          variant="contained"
          startIcon={<SendIcon />}
          className={styles.sendButton}
        >
          Send
        </Button>
      </Box>
    </>
  );
};
