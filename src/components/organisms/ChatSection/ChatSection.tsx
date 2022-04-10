import styles from "./ChatSection.module.css";
import TextField from "@mui/material/TextField";
import { Button, Box, Typography } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { SentMessage } from "./../../atoms/SentMessage/SentMessage";

export const ChatSection = () => {
  const tempMessage1 = {
    messageText = "Wiadomosc 1 TEST",
    isOwn = false,
    isLast = false,
  };
  const tempMessage2 = {
    messageText = "Wiadomosc 2 TEST",
    isOwn = false,
    isLast = false,
  };
  const tempMessage3 = {
    messageText = "Wiadomosc 1 TEST",
    isOwn = false,
    isLast = false,
  };

  const messages = [tempMessage1, tempMessage2, tempMessage3];

  return (
    <>
      <Box className={styles.chatHeader}>
        <Typography variant="h5" noWrap component="div">
          Chat name
        </Typography>
      </Box>
      <Box className={styles.sentMessagesSection}>
        {/*
        <SentMessagesList />
 */}
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
