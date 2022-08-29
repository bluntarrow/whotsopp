// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFf0pmAhnKIcccE3c8oNmegEc0FdauIew",
  authDomain: "whotsopp.firebaseapp.com",
  projectId: "whotsopp",
  storageBucket: "whotsopp.appspot.com",
  messagingSenderId: "35591111363",
  appId: "1:35591111363:web:af9336e2a853fc80f29876",
  measurementId: "G-S9X6VDEJG2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const usersRef = collection(db, 'users')
const chatsRef = collection(db, 'chats')

export { auth, usersRef, chatsRef };
