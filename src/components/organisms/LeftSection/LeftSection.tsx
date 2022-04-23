import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import styles from "./LeftSection.module.css";
import Button from "@mui/material/Button";
import { AddNewChatModal, Typography, TypographyVariant } from "components";
import { useState } from "react";
import { ConversationPreviewList } from "components";

export const LeftSection = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

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
      <Box>
        <ConversationPreviewList />
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
        <AddNewChatModal isOpen={isOpen} handleClose={handleClose} />
      </Box>
    </>
  );
};
