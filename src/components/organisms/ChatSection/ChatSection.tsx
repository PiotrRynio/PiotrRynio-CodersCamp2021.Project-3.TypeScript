import { Button, Box, Typography, TextField } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { Message } from "components";
import styles from "./ChatSection.module.css";

export const ChatSection = () => {
  return (
    <>
      <Box className={styles.chatHeader}>
        <Typography variant="h5" noWrap component="div">
          Chat name
        </Typography>
      </Box>
      <Box className={styles.sentMessagesSection}>
        <Message
          author={{
            name: "Patryk Święcicki",
            avatar:
              "https://gfx.planeta.pl/var/planetapl/storage/images/wiadomosci/swiat/aligator-zaatakowal-rowerzyste.-wzial-go-w-paszcze-21-07-2021/5276486-1-pol-PL/ALIGATOR-ZAATAKOWAL-ROWERZYSTE.-Wzial-go-w-paszcze_article.jpg",
          }}
          message={{ content: "I jak?", date: new Date() }}
          isLast={false}
          isOwn={true}
        />
      </Box>
      <Box className={styles.newMessageSection}>
        <TextField
          className={styles.messageInput}
          aria-label="maximum height"
          placeholder="Enter message..."
          variant="filled"
          multiline
          maxRows="6"
        />

        <Button
          variant="contained"
          startIcon={<SendIcon />}
          className={styles.sendButton}
        >
          Send
        </Button>
      </Box>
    </>
  );
};
