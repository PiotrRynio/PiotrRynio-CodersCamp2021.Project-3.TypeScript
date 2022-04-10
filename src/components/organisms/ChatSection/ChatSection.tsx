import styles from "./ChatSection.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { SentMessage } from "./../../atoms/SentMessage/SentMessage";

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
