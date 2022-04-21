import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "intouch-ebc93.firebaseapp.com",
  projectId: "intouch-ebc93",
  storageBucket: "intouch-ebc93.appspot.com",
  messagingSenderId: "1065053966861",
  appId: "1:1065053966861:web:caff4f6730509811befb44",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const dataBase = getFirestore(firebaseApp);
