import React, { createContext, useState } from "react";

type UserContextType = {
  firstName?: string;
  lastName?: string;
  isAuth: boolean;
  email?: string;
  setIsAuth: (newIsAuth: boolean) => void;
};

const userContextDefaultValues: UserContextType = {
  isAuth: false,
  setIsAuth: (newIsAuth: boolean) => {},
};

export const UserContext = createContext<UserContextType>(
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

//bedzie dodane
//export const useAppContext = () => useContext(AppContext);
