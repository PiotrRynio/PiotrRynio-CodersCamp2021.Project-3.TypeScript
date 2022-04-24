import React from "react";
import List from "@mui/material/List";
import { useDatabase } from "contexts";
import { ConversationPreview } from "components";
import styles from "./ConversationPreviewList.module.scss";
import { useQuery } from "react-query";
import { useChosenChatContext } from "./../../../providers/AppProviders";
export type ConversationPreviewListProps = {};

export const ConversationPreviewList = ({}: ConversationPreviewListProps) => {
  const { getChatById, getUsers, getUserChatsIds } = useDatabase();
  const { chatID, setChatID } = useChosenChatContext();

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

  const onClickAtConversationPreview = (chatID: string): void => {
    setChatID(chatID);
  };
  return (
    <List className={styles.chatList}>
      {conversationPreviewList &&
        conversationPreviewList.map((conversationPreview, index) => (
          <ConversationPreview
            Click={onClickAtConversationPreview}
            key={index}
            conversationTitle={conversationPreview.chatName}
            userFirstName={conversationPreview.userFirstName}
            userLastName={conversationPreview.userLastName}
            userAvatar={conversationPreview.userAvatar}
            lastMessage={conversationPreview.lastMessage}
            chatId={conversationPreview.id}
          />
        ))}
    </List>
  );
};

export default ConversationPreviewList;
