import React, { createContext, useContext, useState } from "react";

type UserContextType = {
  firstName: string;
  lastName: string;
  isAuth: boolean;
  email: string;
  setFirstName?: (firstName: string) => void;
  setLastName?: (lastName: string) => void;
  setIsAuth: (isAuth: boolean) => void;
  setEmail?: (email: string) => void;
};

const userContextDefaultValues: UserContextType = {
  firstName: "",
  lastName: "",
  isAuth: false,
  email: "",
  setFirstName: (firstName: string) => {},
  setLastName: (lastName: string) => {},
  setIsAuth: (isAuth: boolean) => {},
  setEmail: (email: string) => {},
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAppUserContext = () => useContext(UserContext);
