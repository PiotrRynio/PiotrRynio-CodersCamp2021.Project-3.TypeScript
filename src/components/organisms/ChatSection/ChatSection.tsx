import { Button, Box, Typography, TextField } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { dataBase } from "../../../assets/firebase";
import { SentMessagesList } from "components";
import styles from "./ChatSection.module.css";
import { DocumentReference } from "@firebase/firestore-types";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Send as SendIcon } from "@mui/icons-material";

type MessageItemToFirebase = {
  content: string;
  sentAt: Date;
  author?: DocumentReference;
};

interface IFormInput {
  message: string;
}
export const ChatSection = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const messagesCollection = collection(dataBase, "messages");
  const [messages, loading, error] = useCollectionData(messagesCollection);

  const sendMessage: SubmitHandler<IFormInput> = async (data) => {
    const newMessage: MessageItemToFirebase = {
      content: data.message,
      sentAt: new Date(),
    };
    reset();
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
        <form onSubmit={handleSubmit(sendMessage)}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                className={styles.messageInput}
                aria-label="maximum height"
                placeholder="Enter message..."
                variant="filled"
                {...register("message", {
                  required: true,
                  pattern: {
                    value: /.*[^\s].*/,
                    message: "Sorry, you cannot send only white spaces",
                  },
                  maxLength: {
                    value: 500,
                    message:
                      "Sorry, your message shouldn't exceed 500 characters",
                  },
                })}
              />
            )}
          />
        </form>
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <div>{message}</div>}
        />
      </Box>
    </>
  );
};
