import React, { useContext } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  getDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
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

  console.log();
  console.log("USERS");
  console.log(users);
  console.log("CHATS");
  console.log(chats);
  // console.log("USERS COLLECTION");
  // console.log(usersCollection);
  // console.log("CHATS COLLECTION");
  // console.log(chatsCollection);
  // console.log("DATABASE");
  // console.log(dataBase);*/

  const addUserToDatabase = (user: User) => {
    return addDoc(usersCollection, user);
  };

  const addChatToDatabase = (chat: Chat) => {
    return addDoc(chatsCollection, chat);
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
    users,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
