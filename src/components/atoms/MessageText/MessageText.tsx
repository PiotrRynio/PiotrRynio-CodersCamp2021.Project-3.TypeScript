import { Typography, Box } from "@mui/material";
import styles from "./MessageText.module.scss";

type MessageTextProps = {
  content: string;
};

export const MessageText = ({ content }: MessageTextProps) => {
  return (
    <Box className={styles.messageContent}>
      <Typography variant="body1" noWrap component="div">
        {content}
      </Typography>
    </Box>
  );
};
