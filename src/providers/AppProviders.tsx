import React, { createContext, useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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

type chosenChatType = {
  chatID: string;
  setChatID: (chatID: string) => void;
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

const chosenChatDefaultValues: chosenChatType = {
  chatID: "temporaryCHATID",
  setChatID: (chatID: string) => {},
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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export const ChosenChatContext = createContext<chosenChatType>(
  chosenChatDefaultValues
);
export const ChosenChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [chatID, setChatID] = useState<string>(chosenChatDefaultValues.chatID);

  return (
    <ChosenChatContext.Provider
      value={{
        chatID,
        setChatID,
      }}
    >
      {children}
    </ChosenChatContext.Provider>
  );
};

export const useChosenChatContext = () => useContext(ChosenChatContext);
export const useAppUserContext = () => useContext(UserContext);
