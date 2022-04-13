import { Button, Box, Typography, TextField } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import styles from "./ChatSection.module.css";
import { SentMessagesList } from "components";
import { useState } from "react";
import { dataBase } from "../../../assets/firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const tempMessage1 = {
  messageText: "Wiadomosc 1 TEST",
  isOwn: false,
  isLast: false,
};
const tempMessage2 = {
  messageText: "Wiadomosc 2 TEST",
  isOwn: false,
  isLast: false,
};
const tempMessage3 = {
  messageText: "Wiadomosc 3 TEST",
  isOwn: false,
  isLast: false,
};

const tempMessages = [tempMessage1, tempMessage2, tempMessage3];

export const ChatSection = () => {
  const [messageToSend, setMessageToSend] = useState<string>("");

  const messagesCollectionRef = collection(dataBase, "messages");

  const [messages, loading, error] = useCollectionData(messagesCollectionRef);

  if (!loading) {
    console.log(messages);
  }

  const sendMessage = () => {
    setMessageToSend("");

    const newMessage = {
      messageText: messageToSend,
      isOwn: false,
      isLast: false,
    };

    tempMessages.push(newMessage);
  };

  return (
    <>
      <Box className={styles.chatHeader}>
        <Typography variant="h5" noWrap component="div">
          Chat name
        </Typography>
      </Box>
      <Box className={styles.sentMessagesSection}>
        <SentMessagesList messages={tempMessages} />
      </Box>
      <Box className={styles.newMessageSection}>
        <TextField
          className={styles.messageInput}
          aria-label="maximum height"
          placeholder="Enter message..."
          variant="filled"
          multiline
          maxRows="6"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          onChange={(e) => setMessageToSend(e.target.value)}
          value={messageToSend}
        />

        <Button
          variant="contained"
          startIcon={<SendIcon />}
          className={styles.sendButton}
          onClick={sendMessage}
        >
          Send
        </Button>
      </Box>
    </>
  );
};
