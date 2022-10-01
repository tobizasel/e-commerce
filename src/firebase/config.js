// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYVugp4m84mHlBG7cIZHsDnCuhmTyOZLk",
  authDomain: "game-shop-coder.firebaseapp.com",
  projectId: "game-shop-coder",
  storageBucket: "game-shop-coder.appspot.com",
  messagingSenderId: "758958486000",
  appId: "1:758958486000:web:2d79e736957b771263ed35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

