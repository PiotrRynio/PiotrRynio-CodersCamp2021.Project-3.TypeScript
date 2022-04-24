import React, { useContext } from "react";
import {
  addDoc,
  collection,
  doc,
  query,
  where,
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

  const getUserChatsIds = async (userId: string) => {
    const user = await getUserById(userId);
    return user?.chats;
  };

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

    const updatedUser = {
      ...user,
      chats: [...user.chats, chatId],
    };

    const docUserToUpdate = doc(dataBase, "users", user.id);
    await updateDoc(docUserToUpdate, {
      chats: [...user.chats, chatId],
    });
  };

  const getUserById = async (userId: string): Promise<User | undefined> => {
    const allUsersSnapshot = await getDocs(usersCollection);
    const allUsers = allUsersSnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as User)
    );
    const user = allUsers.find((user) => user.id === userId);
    return user;
  };

  const addUserToDatabase = (user: User) => {
    const newUser = addDoc(usersCollection, user);
    return newUser;
  };

  const findUserDataIdbyUid = async (uid: string) => {
    const q = query(collection(dataBase, "users"), where("uid", "==", uid));
    const querySnapshot: any = await getDocs(q);
    return querySnapshot.docs[0].id;
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
    getUserChatsIds,
    getChatById,
    findUserDataIdbyUid,
    users,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
