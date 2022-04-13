import { Typography, Container } from "@mui/material";
import styles from "./MessageText.module.scss";

type MessageTextProps = {
  content: string;
};

export const MessageText = ({ content }: MessageTextProps) => {
  return (
    <Container className={styles.messageContent}>
      <Typography variant="body1" noWrap component="div">
        {content}
      </Typography>
    </Container>
  );
};
