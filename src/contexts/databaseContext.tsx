import React, { useContext, useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DatabaseContext = React.createContext<any>(null);

type User = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  id: string;
};

type Chat = {
  chatName: string;
  users: string[];
  messages?: string[];
};

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider: React.FC = ({ children }) => {
  const usersCollection = collection(dataBase, "users");
  const chatsCollection = collection(dataBase, "chats");

  const [users] = useCollectionData(usersCollection);
  const [chats] = useCollectionData(chatsCollection);

  const addUserToDatabase = (user: User) => {
    return addDoc(usersCollection, user);
  };

  const addChatToDatabase = (chat: Chat) => {
    return addDoc(chatsCollection, chat);
  };

  const value = {
    addUserToDatabase,
    addChatToDatabase,
    users,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
