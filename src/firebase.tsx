import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDsQNNfinQhAgyadf1P5v2I9upQXA5K8Q",
  authDomain: "testing-65e1c.firebaseapp.com",
  projectId: "testing-65e1c",
  storageBucket: "testing-65e1c.appspot.com",
  messagingSenderId: "633905917585",
  appId: "1:633905917585:web:b57d2c40151f9bf2065930",
};
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const dataBase = getFirestore(firebaseApp);
