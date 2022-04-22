import React, { useContext, useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DatabaseContext = React.createContext<any>(null);
const usersCollection = collection(dataBase, "users");

type User = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  id: string;
};

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider: React.FC = ({ children }) => {
  const usersCollection = collection(dataBase, "users");
  const [users] = useCollectionData(usersCollection);

  const addUserToDatabase = (user: User) => {
    return addDoc(usersCollection, user);
  };

  const value = {
    addUserToDatabase,
    users,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
