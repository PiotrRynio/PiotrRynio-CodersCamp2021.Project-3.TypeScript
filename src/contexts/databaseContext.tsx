import React, { useContext } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dataBase } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DatabaseContext = React.createContext<any>(null);

type User = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  id: string;
  chats: string[];
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

  // get chat by id from chats collection
  const getChatById = async (chatId: string) => {
    const allChatsSnapshot = await getDocs(chatsCollection);
    const allChats = allChatsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return allChats?.find((chat) => chat.id === chatId);
  };

  const addChatInUserChats = async (
    userId: string,
    chatId: string
  ): Promise<void> => {
    const user = await getUserById(userId);
    if (!user) {
      return;
    }

    await console.log(chatId);
    const updatedUser = {
      ...user,
      chats: [...user.chats, chatId],
    };
    console.log("updatedUSER:", updatedUser);

    const docTemp = doc(dataBase, "users", user.id);
    await updateDoc(docTemp, {
      ...updatedUser,
    });
  };

  const getUserById = async (userId: string): Promise<User | undefined> => {
    const allUsersSnapshot = await getDocs(usersCollection);
    const allUsers = allUsersSnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as User)
    );
    const user = allUsers.find((user) => user.id === userId);
    console.log("getUserById", userId, user);
    return user;
  };

  const addUserToDatabase = (user: User) => {
    return addDoc(usersCollection, user);
  };

  const addChatToDatabase = async (chat: Chat): Promise<string> => {
    const newChatSnapshot = await addDoc(chatsCollection, chat);
    return newChatSnapshot.id;
  };

  const getUserByEmail = async (email: string) => {
    const allUsersSnapshot = await getDocs(usersCollection);
    const allUsers = allUsersSnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as User)
    );
    const user = allUsers.find((user) => user.emailAddress === email);
    return user;
  };

  const value = {
    addUserToDatabase,
    addChatToDatabase,
    getUserByEmail,
    addChatInUserChats,
    users,
    getChatById,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
