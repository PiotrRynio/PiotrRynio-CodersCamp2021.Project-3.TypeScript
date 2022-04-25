import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { UserAvatar, Typography, TypographyVariant } from "components";

export type ConversationPreviewProps = {
  conversationTitle: string;
  Click: (chatId: string, chatName: string) => void;
  chatId: string;
  chatName: string;
};

export const ConversationPreview = ({
  conversationTitle,
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
        <ListItemText
          primary={conversationTitle}
          secondary={
            <>
              <Typography
                variant={TypographyVariant.CONVERSATION_PREVIEW_AUTHOR}
              ></Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
};
