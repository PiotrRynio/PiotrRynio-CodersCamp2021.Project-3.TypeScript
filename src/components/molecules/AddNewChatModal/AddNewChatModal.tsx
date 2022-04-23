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
import { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useDatabase } from "contexts";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type ModalInput = {
  emails: string[];
  chatName: string;
};

type Chat = {
  chatName: string;
  users: string[];
  messages?: string[];
  id?: string;
};
export const AddNewChatModal = ({ isOpen, handleClose }: ModalProps) => {
  const { users, addChatToDatabase, getUserByEmail, addChatInUserChats } =
    useDatabase();

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ModalInput>();

  const usersEmailsList: string[] = users
    ? users.map((user: any) => user.emailAddress)
    : [];

  const onSubmit: SubmitHandler<ModalInput> = async (data): Promise<void> => {
    const users = data.emails.map(
      async (email: string) => await getUserByEmail(email)
    );
    const createdChat: Chat = {
      chatName: data.chatName,
      users: await Promise.all(users),
    };

    const addedChatId: string = await addChatToDatabase(createdChat);

    const userIds = createdChat.users.map((user: any) => user.id);

    await userIds.forEach((userId: string) => {
      addChatInUserChats(userId, addedChatId);
    });
    handleClose();
  };

  useEffect(() => {
    register("emails", {
      validate: (value) => !!value?.length || "This is required.",
    });
    register("chatName", {
      validate: (value) => !!value?.length || "This is required.",
    });
  }, [register]);

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
                  options={usersEmailsList.map((option) => option)}
                  getOptionLabel={(option: string) => option}
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
                    <TextField
                      {...params}
                      variant="filled"
                      label="emails"
                      error={Boolean(errors?.emails)}
                    />
                  )}
                  onChange={(e, options) => setValue("emails", options)}
                />
              )}
            />
            <Box className={styles.chatNameInput}>
              <DialogContentText>Then name your chat.</DialogContentText>
            </Box>

            <TextField
              name="chatName"
              variant="filled"
              label="Chat name"
              error={Boolean(errors?.chatName)}
              onChange={(e) => setValue("chatName", e.target.value)}
            />
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