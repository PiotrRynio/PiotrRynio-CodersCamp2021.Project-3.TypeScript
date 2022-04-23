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
  const { getChatById } = useDatabase();
  // chatsId in array of string
  const chatsIds = [
    "Xhsh1FHPndJfzbk66HUA",
    "Xhsh1FHPndJfzbk66HUA",
    "Xhsh1FHPndJfzbk66HUA",
  ];

  const { data: conversationPreviewList } = useQuery(
    "exampleKey",
    () => {
      return Promise.all(chatsIds.map((chatId) => getChatById(chatId)));
    },
    {}
  );

  console.log(conversationPreviewList);

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
