import React from "react";
import List from "@mui/material/List";
import { useDatabase } from "contexts";
import { ConversationPreview } from "components";
import styles from "./ConversationPreviewList.module.scss";
import { useQuery } from "react-query";

export type ConversationPreviewListProps = {
  // propsName: any;
};

export const ConversationPreviewList = ({}: ConversationPreviewListProps) => {
  const { getChatById, getUsers, getUserChatsIds } = useDatabase();

  const { data: chatsIds } = useQuery(
    "userChats",
    () => {
      return getUserChatsIds("rg4XVqDWLPztcwREjCCQ");
    },
    {}
  );

  const { data: conversationPreviewList } = useQuery(
    "chatsData",
    () => {
      return Promise.all(
        chatsIds.map((chatId: any) => {
          return getChatById(chatId);
        })
      );
    },
    { enabled: !!chatsIds }
  );

  return (
    <List className={styles.chatList}>
      {conversationPreviewList &&
        conversationPreviewList.map((conversationPreview, index) => (
          <ConversationPreview
            key={index}
            conversationTitle={conversationPreview.chatName}
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
