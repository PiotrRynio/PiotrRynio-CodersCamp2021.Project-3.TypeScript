import React from "react";
import List from "@mui/material/List";
import { useDatabase } from "contexts";
import { ConversationPreview } from "components";
import styles from "./ConversationPreviewList.module.scss";

export type ConversationPreviewListProps = {
  // propsName: any;
};

export const ConversationPreviewList = ({}: ConversationPreviewListProps) => {
  const { users, addChatToDatabase, getUserByEmail, addChatInUserChats } =
    useDatabase();
  return (
    <List className={styles.chatList}>
      {conversationPreviewList.map((conversationPreview, index) => (
        <ConversationPreview
          key={index}
          conversationTitle={conversationPreview.conversationTitle}
          userFirstName={conversationPreview.userFirstName}
          userLastName={conversationPreview.userLastName}
          userAvatar={conversationPreview.userAvatar}
          lastMessage={conversationPreview.lastMessage}
        />
      ))}
    </List>
  );
};

export default ConversationPreviewList;

// 3 elements array of objects with conversationTitle, userFirstName, userLastName, userAvatar, lastMessage
const conversationPreviewList = [
  {
    conversationTitle: "Conversation 1",
    userFirstName: "John",
    userLastName: "Doe",
    userAvatar: "https://via.placeholder.com/150",
    lastMessage: "Hello",
  },
  {
    conversationTitle: "Conversation 2",
    userFirstName: "Jane",
    userLastName: "Doe",
    userAvatar: "https://via.placeholder.com/150",
    lastMessage: "Hello",
  },
  {
    conversationTitle: "Conversation 3",
    userFirstName: "John",
    userLastName: "Doe",
    userAvatar: "https://via.placeholder.com/150",
    lastMessage: "Hello",
  },
];
