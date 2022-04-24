import { Button, Box, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { collection, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { dataBase } from "../../../firebase";
import { SentMessagesList, Typography, TypographyVariant } from "components";
import styles from "./ChatSection.module.css";
import { DocumentReference } from "@firebase/firestore-types";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useWindowWidth } from "utils";
import { useChosenChatContext } from "../../../providers/AppProviders";
import { useQuery } from "react-query";
import { useDatabase } from "contexts";
import { useEffect } from "react";

type MessageItemToFirebase = {
  id?: string;
  content: string;
  sentAt: Date;
  author?: DocumentReference;
};

interface IFormInput {
  message: string;
}

type ChatSectionProps = {
  closeFunction(): void;
  chatId?: string;
};

export const ChatSection = ({ closeFunction }: ChatSectionProps) => {
  const { width } = useWindowWidth();
  const { chatID } = useChosenChatContext();
  const { getChatById, addMessageToChat } = useDatabase();

  const {
    data: chatData,
    refetch,
    isLoading,
  } = useQuery(
    "chatData",
    () => {
      return getChatById(chatID);
    },
    {}
  );
  useEffect(() => {
    refetch();
  }, [chatID]);

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
      //author -
    };
    reset();
    const createdMessage = await addDoc(messagesCollection, newMessage);
    newMessage.id = createdMessage.id;
    addMessageToChat(newMessage, chatID);
    //tutaj update chatu o messages
  };
  if (!isLoading) {
    return (
      <>
        <Box className={styles.chatHeader}>
          <Typography variant={TypographyVariant.CHAT_TITLE}>
            {chatData?.chatName}
          </Typography>
          {width < 800 && (
            <IconButton onClick={() => closeFunction()}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <Box className={styles.sentMessagesSection}>
          {/*<SentMessagesList messages={messages} />*/}
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
  } else return <></>;
};
