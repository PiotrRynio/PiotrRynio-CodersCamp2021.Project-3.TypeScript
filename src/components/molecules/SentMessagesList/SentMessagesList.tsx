import {
  SentMessage,
  SentMessageProps,
} from "components/atoms/SentMessage/SentMessage";
import { Box } from "@mui/material";

type MessageListProps = {
  messages: SentMessageProps[];
};

export const SentMessagesList = ({ messages }: MessageListProps) => {
  console.log(messages);
  return (
    <Box>
      {messages.map((message) => (
        <SentMessage
          key={message.messageText}
          messageText={message.messageText}
          isLast={message.isLast}
          isOwn={message.isOwn}
        />
      ))}
    </Box>
  );
};
