// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2P0csLf7EvHKf1NnKrY7X33nw6iagqQg",
  authDomain: "drivmi-3c632.firebaseapp.com",
  projectId: "drivmi-3c632",
  storageBucket: "drivmi-3c632.appspot.com",
  messagingSenderId: "983745372523",
  appId: "1:983745372523:web:21d2560489053ad5d0ac2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
