import {
  SentMessage,
  SentMessageProps,
} from "components/atoms/SentMessage/SentMessage";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { useDatabase } from "contexts";

type MessageType = {
  content: string;
  isLast?: boolean;
  isOwn: boolean;
  sentAt: {};
};

export const SentMessagesList = () => {
  const { chatMessages } = useDatabase();
  console.log(chatMessages[0]?.sentAt.seconds);

  const compare = (a: any, b: any) => {
    if (a?.sentAt?.seconds < b?.sentAt?.seconds) {
      return -1;
    }
    if (a?.sentAt?.seconds > b?.sentAt?.seconds) {
      return 1;
    }
    return 0;
  };
  if (chatMessages) {
    return (
      <Box>
        {chatMessages.sort(compare).map((message: MessageType) => {
          return (
            <SentMessage
              key={message.content}
              content={message.content}
              isLast={true}
              isOwn={true}
            />
          );
        })}
      </Box>
    );
  }
  return <></>;
};
