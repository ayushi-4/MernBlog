// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5e0f2.firebaseapp.com",
  projectId: "mern-blog-5e0f2",
  storageBucket: "mern-blog-5e0f2.appspot.com",
  messagingSenderId: "608289165411",
  appId: "1:608289165411:web:e9dc600dcc4e27399da856"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);