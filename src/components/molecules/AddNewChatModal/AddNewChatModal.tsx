import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReactDom from "react-dom";
import { Autocomplete, Chip } from "@mui/material";
import { Logo } from "../../atoms";
import styles from "./AddNewChatModal.module.css";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
};
export const AddNewChatModal = ({ open, handleClose }: ModalProps) => {
  // dodac useState dla email, na ich podstawie pokazywac okno wpisania nazwy czatu. dopiero wtedy aktywowac button do create chat.

  const sampleUserList = [
    { email: "agnieszka.przybylowska123@gmail.com" },
    { email: "agnieszka.przybylowska456@gmail.com" },
    { email: "agnieszka.przybylowska678@gmail.com" },
  ];

  const modal = (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box className={styles.titleSection}>
          <DialogTitle>
            Add new chat
            <Logo className={styles.logo} />
          </DialogTitle>
        </Box>
        <DialogContent>
          <DialogContentText>
            To create new chat please select participants below. Use email
            address.
          </DialogContentText>
          <Autocomplete
            multiple
            id="tags-filled"
            options={sampleUserList.map((option) => option.email)}
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="emails" />
            )}
          />
          <DialogContentText>Then name your chat.</DialogContentText>
          <TextField variant="filled" label="Chat name" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create chat</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  return ReactDom.createPortal(modal, document.body);
};
