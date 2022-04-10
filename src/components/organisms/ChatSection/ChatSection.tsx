import { Button, Box, Typography, TextField } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { SentMessage } from "components";
import styles from "./ChatSection.module.css";

export const ChatSection = () => {
  return (
    <>
      <Box className={styles.chatHeader}>
        <Typography variant="h5" noWrap component="div">
          Chat name
        </Typography>
      </Box>
      <Box className={styles.sentMessagesSection}>
        <SentMessage messageText={"Sample temporary message"} />
      </Box>
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
