import firebase from "firebase";

export const firebaseApp = firebase.initializeApp({
  authDomain: "intouch-ebc93.firebaseapp.com",
  projectId: "intouch-ebc93",
  storageBucket: "intouch-ebc93.appspot.com",
  messagingSenderId: "1065053966861",
  appId: "1:1065053966861:web:caff4f6730509811befb44",
});

export const dataBase = firebaseApp.firestore();
