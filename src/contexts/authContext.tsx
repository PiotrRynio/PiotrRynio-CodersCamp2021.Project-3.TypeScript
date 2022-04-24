import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userData, setUserData] = useState(() => "");

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUserData("");
    await signOut(auth);
    setCurrentUser(null);
    return;
  };

  const setUserName = (name: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, { displayName: name });
    }
  };

  const setUserDataId = (id: string) => {
    setUserData(id);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscriber;
  }, []);

  const value = {
    currentUser,
    userData,
    signUp,
    setUserName,
    login,
    logout,
    setUserDataId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
