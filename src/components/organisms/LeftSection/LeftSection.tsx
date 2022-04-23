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

export const LeftSection = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

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
        <List
          className={styles.chatList}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    variant={TypographyVariant.CONVERSATION_PREVIEW_AUTHOR}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    variant={TypographyVariant.CONVERSATION_PREVIEW_AUTHOR}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    variant={TypographyVariant.CONVERSATION_PREVIEW_AUTHOR}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
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
