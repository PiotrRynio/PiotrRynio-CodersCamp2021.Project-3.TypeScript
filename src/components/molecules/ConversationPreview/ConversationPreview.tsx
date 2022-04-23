import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { UserAvatar, Typography, TypographyVariant } from "components";

type ConversationPreviewProps = {
  conversationTitle: string;
  userFirstName: string;
  userLastName: string;
  userAvatar: string;
  lastMessage?: string;
};

const ConversationPreview = ({
  conversationTitle,
  userFirstName,
  userLastName,
  userAvatar,
  lastMessage,
}: ConversationPreviewProps) => {
  return (
    <>
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
    </>
  );
};
