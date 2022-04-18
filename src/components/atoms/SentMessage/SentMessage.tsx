import { Typography, Container } from "@mui/material";
import styles from "./SentMessage.module.scss";

export type SentMessageProps = {
  content: string;
  isOwn?: boolean;
  isLast?: boolean;
};

export const SentMessage = ({ content }: SentMessageProps) => {
  return (
    <Container className={styles.messageContent}>
      <Typography variant="body1" noWrap component="div">
        {content}
      </Typography>
    </Container>
  );
};
