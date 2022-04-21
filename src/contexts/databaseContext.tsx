import React, { useContext, useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebase";

const DatabaseContext = React.createContext<any>(null);

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

  const addUserToDatabase = (user: User) => {
    return addDoc(usersCollection, user);
  };

  const value = {
    addUserToDatabase,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
