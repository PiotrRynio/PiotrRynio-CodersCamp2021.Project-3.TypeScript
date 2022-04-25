import React, { useContext } from "react";
import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDoc,
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
  id: string;
  chatName: string;
  users: string[];
  messages?: string[];
};
type Message = {
  id: string;
  content: string;
  sentAt: Date;
  authorID?: string;
};
export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider: React.FC = ({ children }) => {
  const usersCollection = collection(dataBase, "users");
  const chatsCollection = collection(dataBase, "chats");
  const messagesCollection = collection(dataBase, "messages");

  const [users] = useCollectionData(usersCollection);
  const [chats] = useCollectionData(chatsCollection);

  const getUserChats = async (userId: string) => {
    const user = await getUserById(userId);
    if (!user) return [];

    const userChatsIds = user.chats;

    const allChatsSnapshot = await getDocs(chatsCollection);
    const allChats = allChatsSnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as Chat)
    );
    const chats = allChats.filter((chat) => userChatsIds.includes(chat.id));

    return chats;
  };

  const getUserChatsIds = async (userId: string) => {
    const user = await getUserById(userId);
    return user?.chats;
  };

  // get chat by id from chats collection
  const getChatById = async (chatId: string): Promise<{} | undefined> => {
    const allChatsSnapshot = await getDocs(chatsCollection);
    const allChats = allChatsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return allChats?.find((chat) => chat.id === chatId);
  };

  const getMessageByID = async (messageId: string): Promise<{} | undefined> => {
    const allMessagesSnapshot = await getDocs(messagesCollection);
    const allMessages = allMessagesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return allMessages?.find((message) => message.id === messageId);
  };

  const addChatInUserChats = async (
    userId: string,
    chatId: string
  ): Promise<void> => {
    const user = await getUserById(userId);
    if (!user) {
      return;
    }

    const docUserToUpdate = doc(dataBase, "users", user.id);
    const updatedDoc = await updateDoc(docUserToUpdate, {
      chats: [...user.chats, chatId],
    });
    return updatedDoc;
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

  const addMessageToChat = async (message: Message, chatID: string) => {
    const chat = (await getChatById(chatID)) as Chat;
    const docChatToUpdate = doc(dataBase, "chats", chatID);
    if (chat.messages) {
      chat.messages.push(message.id);
    } else {
      chat.messages = [message.id];
    }
    await updateDoc(docChatToUpdate, {
      messages: chat.messages,
    });
  };

  const value = {
    getUserChats,
    addUserToDatabase,
    addChatToDatabase,
    getUserByEmail,
    addChatInUserChats,
    getUserChatsIds,
    getChatById,
    addMessageToChat,
    getMessageByID,
    findUserDataIdbyUid,
    users,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
