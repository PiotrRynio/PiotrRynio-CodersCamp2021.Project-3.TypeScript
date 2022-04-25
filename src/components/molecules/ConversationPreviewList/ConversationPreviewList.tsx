import List from "@mui/material/List";
import { useAuth, useDatabase } from "contexts";
import { ConversationPreview } from "components";
import styles from "./ConversationPreviewList.module.scss";
import { useChosenChatContext } from "./../../../providers/AppProviders";
export type ConversationPreviewListProps = {
  openChat(): void;
  conversationPreviewList?: any[];
};

export const ConversationPreviewList = ({
  openChat,
  conversationPreviewList,
}: ConversationPreviewListProps) => {
  const { setChatID, setChatName } = useChosenChatContext();

  const onClickAtConversationPreview = (
    chatID: string,
    chatName: string
  ): void => {
    setChatID(chatID);
    setChatName(chatName);
    openChat();
  };

  return (
    <List className={styles.chatList}>
      {conversationPreviewList &&
        conversationPreviewList.map((conversationPreview, index) => (
          <ConversationPreview
            Click={onClickAtConversationPreview}
            key={index}
            conversationTitle={conversationPreview.chatName}
            userFirstName={conversationPreview.firstName}
            userLastName={conversationPreview.lastName}
            userAvatar={conversationPreview.userAvatar}
            lastMessage={conversationPreview.lastMessage}
            chatId={conversationPreview.id}
            chatName={conversationPreview.chatName}
          />
        ))}
    </List>
  );
};

export default ConversationPreviewList;
