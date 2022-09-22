// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg9yjdkHechQ6zcgMp5MTJ1NS6Fa7x784",
  authDomain: "e-commerce-coder-9f0f0.firebaseapp.com",
  projectId: "e-commerce-coder-9f0f0",
  storageBucket: "e-commerce-coder-9f0f0.appspot.com",
  messagingSenderId: "866957640660",
  appId: "1:866957640660:web:d5bf08ecb3ea5ea1084c41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

