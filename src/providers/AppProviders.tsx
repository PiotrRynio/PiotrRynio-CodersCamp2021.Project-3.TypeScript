import React, { createContext, useState } from "react";

type IUserContext = {
  firstName?: string;
  lastName?: string;
  isAuth: boolean;
  email?: string;
  setIsAuth: (newIsAuth: boolean) => void;
};

const userContextDefaultValues: IUserContext = {
  isAuth: false,
  setIsAuth: (newIsAuth: boolean) => {},
};

export const UserContext = createContext<IUserContext>(
  userContextDefaultValues
);

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(
    userContextDefaultValues.isAuth
  );

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
};
