import React, { createContext, useContext, useState } from "react";

type UserContextType = {
  firstName: string;
  lastName: string;
  isAuth: boolean;
  email: string;
  chats: string[];
  setFirstName?: (firstName: string) => void;
  setLastName?: (lastName: string) => void;
  setIsAuth: (isAuth: boolean) => void;
  setEmail?: (email: string) => void;
  setChats: (chats: string[]) => void;
};

const userContextDefaultValues: UserContextType = {
  firstName: "",
  lastName: "",
  isAuth: false,
  email: "",
  chats: [""],

  setFirstName: (firstName: string) => {},
  setLastName: (lastName: string) => {},
  setIsAuth: (isAuth: boolean) => {},
  setEmail: (email: string) => {},
  setChats: (chats: string[]) => {},
};

export const UserContext = createContext<UserContextType>(
  userContextDefaultValues
);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(
    userContextDefaultValues.isAuth
  );
  const [firstName, setFirstName] = useState<string>(
    userContextDefaultValues.firstName
  );
  const [lastName, setLastName] = useState<string>(
    userContextDefaultValues.lastName
  );
  const [email, setEmail] = useState<string>(userContextDefaultValues.email);

  const [chats, setChats] = useState<string[]>(userContextDefaultValues.chats);

  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        chats,
        setChats,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAppUserContext = () => useContext(UserContext);
