import ReactDom from "react-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, Chip } from "@mui/material";
import { Logo } from "../../atoms";
import styles from "./AddNewChatModal.module.css";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DocumentReference } from "@firebase/firestore-types";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type ModalInput = {
  emails: string[];
  chatName?: string;
};

export const AddNewChatModal = ({ isOpen, handleClose }: ModalProps) => {
  // dodac useState dla email, na ich podstawie pokazywac okno wpisania nazwy czatu. dopiero wtedy aktywowac button do create chat.

  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,

    formState: { errors },
  } = useForm<ModalInput>();

  const sampleUserList = [
    { email: "agnieszka.przybylowska123@gmail.com" },
    { email: "agnieszka.przybylowska456@gmail.com" },
    { email: "agnieszka.przybylowska678@gmail.com" },
  ];
  const onSubmit: SubmitHandler<ModalInput> = (data) => {
    console.log("kurde nie dziala");
    console.log(data.emails);
  };

  const modal = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Dialog open={isOpen} onClose={handleClose}>
          <Box className={styles.titleSection}>
            <DialogTitle>
              Add new chat
              <Logo className={styles.logo} />
            </DialogTitle>
          </Box>
          <DialogContent>
            <DialogContentText>
              To create new chat please select participants below. <br /> Use
              email address.
            </DialogContentText>

            <Controller
              name="emails"
              control={control}
              render={(props) => (
                <Autocomplete
                  multiple
                  limitTags={1}
                  options={sampleUserList.map((option) => option.email)}
                  getOptionLabel={(option: string) => option}
                  onChange={(e, options) => setValue("emails", options)}
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
              )}
            />

            <Box className={styles.chatNameInput}>
              <DialogContentText>Then name your chat.</DialogContentText>
            </Box>

            <TextField variant="filled" label="Chat name" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button color="success" onClick={handleSubmit(onSubmit)}>
              Create chat
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </form>
  );

  return ReactDom.createPortal(modal, document.body);
};
