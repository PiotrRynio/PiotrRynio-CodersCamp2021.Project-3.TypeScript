import {
  SentMessage,
  SentMessageProps,
} from "components/atoms/SentMessage/SentMessage";
import { Box } from "@mui/material";

type MessageListProps = {
  messages: SentMessageProps[];
};

export const SentMessagesList = ({ messages }: MessageListProps) => {
  return (
    <Box>
      {messages.map((message) => (
        <SentMessage
          messageText={message.messageText}
          isLast={message.isLast}
          isOwn={message.isOwn}
        />
      ))}
    </Box>
  );
};
