import { Box } from "@mui/material";
import { MessageText, UserAvatar } from "components";
import styles from "./Message.module.scss";

type MessageProps = {
  author: {
    name: string;
    avatar?: string;
  };
  message: {
    content: string;
    date: Date;
  };
  isOwn?: boolean;
  isLast?: boolean;
};

export const Message = ({ author, message, isOwn, isLast }: MessageProps) => {
  return (
    <>
      <Box
        className={`${isOwn ? styles.messageToRight : styles.messageToLeft} ${
          styles.messageContainer
        }`}
      >
        {isLast ? (
          <UserAvatar label={author.name} image={author.avatar} />
        ) : (
          <div className={styles.messageMargin} />
        )}
        <MessageText
          content={message.content}
          date={message.date}
          isLast={isLast}
        />
      </Box>
    </>
  );
};
