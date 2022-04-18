import React, { createContext, useState } from "react";

type IUserContext = {
  firstName?: string;
  lastName?: string;
  isAuth: boolean;
  email?: string;
};

const userContextDefaultValues: IUserContext = {
  isAuth: false,
};

export const UserContext = createContext<IUserContext>(
  userContextDefaultValues
);

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserContext>(userContextDefaultValues);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
