// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-realtime.firebaseapp.com",
  projectId: "reactchat-realtime",
  storageBucket: "reactchat-realtime.appspot.com",
  messagingSenderId: "158595062552",
  appId: "1:158595062552:web:6ddd9da5f0530886805c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()