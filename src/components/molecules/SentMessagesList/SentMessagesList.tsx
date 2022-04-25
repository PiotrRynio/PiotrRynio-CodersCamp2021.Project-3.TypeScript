import {
  SentMessage,
  SentMessageProps,
} from "components/atoms/SentMessage/SentMessage";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { useDatabase } from "contexts";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { dataBase } from "../../../firebase";

type MessageListProps = {
  messagesIds: string[] | undefined;
};

export const SentMessagesList = (messagesIds: any) => {
  const messagesCollection = collection(dataBase, "messages");
  const [messages, loading, error] = useCollectionData(messagesCollection);

  console.log("W SENT MESSAGES LIST");
  console.log(messagesIds);
  const { getMessageByID } = useDatabase();

  const { data: messagesFromFirebase } = useQuery(
    "messagesQuery",
    () => {
      console.log("messagesIds", messagesIds);
      return Promise.all(
        messagesIds.messages.map((messageID: any) => {
          return getMessageByID(messageID);
        })
      );
    },
    { enabled: !!messagesIds }
  );

  let messagesList;
  if (messagesFromFirebase) {
    const messagesList = messagesFromFirebase.map((message) => {
      console.log("NASTEPUJE EDYCJA");
      message.isOwn = true;
      message.isLast = false;
    });
  }

  console.log(messagesFromFirebase);
  if (!!messagesFromFirebase) {
    return (
      <Box>
        {messagesFromFirebase.map((message) => (
          <SentMessage
            key={message.content}
            content={message.content}
            isLast={false}
            isOwn={false}
          />
        ))}
      </Box>
    );
  } else return <></>;
};
