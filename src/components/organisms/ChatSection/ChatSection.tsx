import { useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { collection, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { dataBase } from "../../../assets/firebase";
import { SentMessagesList } from "components";
import styles from "./ChatSection.module.css";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import DocumentReference = firebase.firestore.DocumentReference;

export type MessageItemToFirebase = {
  authorId: DocumentReference;
  content: string;
  sentAt: Date;
};
export const ChatSection = () => {
  const [messageToSend, setMessageToSend] = useState<string>("");
  const messagesCollection = collection(dataBase, "messages");
  const [messages, loading, error] = useCollectionData(messagesCollection);

  const sendMessage = async () => {
    const newMessage: MessageItemToFirebase = {
      authorId: new DocumentReference(),
      content: "Test",
      sentAt: new Date(),
    };
    setMessageToSend("");

    await addDoc(messagesCollection, newMessage);
  };

  return (
    <>
      <Box className={styles.chatHeader}>
        <Typography variant="h5" noWrap component="div">
          Chat name
        </Typography>
      </Box>
      <Box className={styles.sentMessagesSection}>
        {/* <SentMessagesList messages={messages} />*/}
      </Box>
      <Box className={styles.newMessageSection}>
        <TextField
          className={styles.messageInput}
          aria-label="maximum height"
          placeholder="Enter message..."
          variant="filled"
          multiline
          maxRows="6"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
          onChange={(event) => setMessageToSend(event.target.value)}
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
