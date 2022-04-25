import {
  SentMessage,
  SentMessageProps,
} from "components/atoms/SentMessage/SentMessage";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { useDatabase } from "contexts";

type MessageType = {
  content: string;
  isLast: boolean;
  isOwn: boolean;
};

export const SentMessagesList = () => {
  const { chatMessages } = useDatabase();

  if (chatMessages) {
    return (
      <Box>
        {chatMessages.map((message: MessageType) => {
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
  } else return <></>;
};
