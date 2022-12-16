import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBEOy7pSiByTDB8a8_gMR9PzqD-VH_xoJU",
  authDomain: "flawless-trick-6809.firebaseapp.com",
  projectId: "flawless-trick-6809",
  storageBucket: "flawless-trick-6809.appspot.com",
  messagingSenderId: "181620673328",
  appId: "1:181620673328:web:7ff1e0ef45bc9fb17356f5",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export default firebase;
