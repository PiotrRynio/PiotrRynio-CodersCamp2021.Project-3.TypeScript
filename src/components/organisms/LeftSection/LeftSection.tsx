import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import styles from "./LeftSection.module.css";
import Button from "@mui/material/Button";
import { AddNewChatModal, Typography, TypographyVariant } from "components";
import { useState } from "react";
import { ConversationPreviewList } from "components";
import { useAuth, useDatabase } from "contexts";
import { useChosenChatContext } from "providers/AppProviders";
import { useQuery } from "react-query";
import { useEffect } from "react";

type LeftSectionProps = {
  showMessages(): void;
};

export const LeftSection = ({ showMessages }: LeftSectionProps) => {
  const { getChatById, getUserChatsIds, getUserChats } = useDatabase();
  const { userData } = useAuth();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [userChats, setUserChats] = useState<any>();
  const [needRefresh, setNeedRefresh] = useState<boolean>(false);

  useEffect(() => {
    const setChats = async () => {
      const chats = await getUserChats(userData);
      setUserChats(chats);
      setNeedRefresh(false);
    };
    setChats();
  }, [needRefresh]);

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <>
      <Box className={styles.searchSection}>
        <TextField
          multiline={true}
          maxRows={2}
          className={styles.searchChatField}
          label="Search chat"
          type="search"
        />
      </Box>
      <Box className={styles.chatsSection}>
        <ConversationPreviewList
          conversationPreviewList={userChats}
          openChat={showMessages}
        />
      </Box>
      <Box className={styles.bottomButtonSection}>
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => {
            setOpen(true);
          }}
        >
          Create new Chat
        </Button>
        <AddNewChatModal
          isOpen={isOpen}
          refreshList={() => {
            setNeedRefresh(true);
          }}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
};
