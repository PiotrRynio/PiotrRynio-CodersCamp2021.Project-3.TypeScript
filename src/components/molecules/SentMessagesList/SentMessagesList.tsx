import {
  SentMessage,
  SentMessageProps,
} from "components/atoms/SentMessage/SentMessage";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { useDatabase } from "contexts";

type MessageListProps = {
  messagesIds: string[] | undefined;
};

export const SentMessagesList = (messagesIds: any) => {
  console.log("W SENT MESSAGES LIST KURDE");
  //console.log(messagesIds);
  const { getMessageByID } = useDatabase();

  const { data: messagesContent } = useQuery(
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

  if (!!messagesContent) {
    return (
      <Box>
        {messagesContent.map((message) => (
          <SentMessage
            key={message.content}
            content={message.content}
            isLast={message.isLast}
            isOwn={message.isOwn}
          />
        ))}
      </Box>
    );
  } else return <></>;
};
