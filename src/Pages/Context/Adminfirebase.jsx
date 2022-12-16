import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const AdminFirebase = {
  apiKey: "AIzaSyCk1KZqAkK08eA48dzWPSuEYEYCuee7vJw",
  authDomain: "admin-authentication-d64d1.firebaseapp.com",
  projectId: "admin-authentication-d64d1",
  storageBucket: "admin-authentication-d64d1.appspot.com",
  messagingSenderId: "401290071994",
  appId: "1:401290071994:web:3f59c98f35d1887e0cd783",
  measurementId: "G-36433GRY2X",
};

// Initialize Firebase
const app = initializeApp(AdminFirebase);
export const auth = getAuth(app);
export default app;
