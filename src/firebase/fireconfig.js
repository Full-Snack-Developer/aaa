// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1s7uAlnUlBXejqH1ZmAvhQ20Q8V5ocZg",
  authDomain: "web67-2d45b.firebaseapp.com",
  projectId: "web67-2d45b",
  storageBucket: "web67-2d45b.appspot.com",
  messagingSenderId: "99728583843",
  appId: "1:99728583843:web:57506228566babc2d42316",
  measurementId: "G-759EQJ79EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fs = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const db = getDatabase(app);
