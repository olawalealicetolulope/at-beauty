// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.FIREBASE_APIKEY,
  apiKey: "AIzaSyAwdwoq4TyLbTjaPA9hhHTZPR1HuRdI3kk",
  authDomain: "at-beauty-3fad9.firebaseapp.com",
  projectId: "at-beauty-3fad9",
  storageBucket: "at-beauty-3fad9.firebasestorage.app",
  messagingSenderId: "918138238734",
  appId: "1:918138238734:web:ac8c63d4607529b947c95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }