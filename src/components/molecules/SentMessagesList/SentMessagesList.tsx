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
          key={message.content}
          content={message.content}
          isLast={message.isLast}
          isOwn={message.isOwn}
        />
      ))}
    </Box>
  );
};
