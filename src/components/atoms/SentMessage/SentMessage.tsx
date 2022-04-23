import { Container } from "@mui/material";
import { Typography, TypographyVariant } from "components";
import styles from "./SentMessage.module.scss";

export type SentMessageProps = {
  content: string;
  isOwn?: boolean;
  isLast?: boolean;
};

export const SentMessage = ({ content }: SentMessageProps) => {
  return (
    <Container className={styles.messageContent}>
      <Typography variant={TypographyVariant.MESSAGE_CONTENT}>
        {content}
      </Typography>
    </Container>
  );
};
