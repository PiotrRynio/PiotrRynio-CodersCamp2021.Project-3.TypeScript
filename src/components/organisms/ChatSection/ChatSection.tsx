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
          message={{ content: "I jak?", date: Date.now().toString() }}
          isLast={false}
          isOwn={true}
        />

        <Message
          author={{
            name: "Patryk Święcicki",
            avatar:
              "https://gfx.planeta.pl/var/planetapl/storage/images/wiadomosci/swiat/aligator-zaatakowal-rowerzyste.-wzial-go-w-paszcze-21-07-2021/5276486-1-pol-PL/ALIGATOR-ZAATAKOWAL-ROWERZYSTE.-Wzial-go-w-paszcze_article.jpg",
          }}
          message={{ content: "Podoba się?", date: Date.now().toString() }}
          isLast={true}
          isOwn={true}
        />

        <Message
          author={{
            name: "Agnieszka Przybyłowska",
            avatar:
              "https://tueuropa.pl/uploads/articles_files/2021/11/05/6e7f9516-1948-d9e8-ca22-00007380aca5.jpg",
          }}
          message={{
            content: "Hmmm... Muszę się zastanowić",
            date: Date.now().toString(),
          }}
          isLast={true}
          isOwn={false}
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
