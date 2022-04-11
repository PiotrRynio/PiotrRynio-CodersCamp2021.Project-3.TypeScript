import { Typography, Container } from "@mui/material";
import styles from "./SentMessage.module.scss";

export type SentMessageProps = {
  messageText: string;
  isOwn?: boolean;
  isLast?: boolean;
};

export const SentMessage = ({ messageText }: SentMessageProps) => {
  return (
    <Container className={styles.messageContent}>
      <Typography variant="body1" noWrap component="div">
        {messageText}
      </Typography>
    </Container>
  );
};