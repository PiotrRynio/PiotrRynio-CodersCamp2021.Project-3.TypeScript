import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { UserAvatar, Typography, TypographyVariant } from "components";

export type ConversationPreviewProps = {
  conversationTitle: string;
  userFirstName: string;
  userLastName: string;
  userAvatar: string;
  Click: (chatId: string, chatName: string) => void;
  lastMessage?: string;
  chatId: string;
  chatName: string;
};

export const ConversationPreview = ({
  conversationTitle,
  userFirstName,
  userLastName,
  userAvatar,
  lastMessage,
  Click,
  chatId,
  chatName,
}: ConversationPreviewProps) => {
  return (
    <Box
      onClick={() => {
        Click(chatId, chatName);
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <UserAvatar
            label={`${userFirstName} ${userLastName}`}
            image={userAvatar}
          />
        </ListItemAvatar>
        <ListItemText
          primary={conversationTitle}
          secondary={
            <>
              <Typography
                variant={TypographyVariant.CONVERSATION_PREVIEW_AUTHOR}
              >
                `${userFirstName} ${userLastName}`
              </Typography>
              {lastMessage}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
};
