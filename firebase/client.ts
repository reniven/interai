import { initializeApp, getApp, getApps, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA87bIsVOsMY0htTGx2RSmmHIso-dCGJJ4",
  authDomain: "ergio-86891.firebaseapp.com",
  projectId: "ergio-86891",
  storageBucket: "ergio-86891.firebasestorage.app",
  messagingSenderId: "16352658825",
  appId: "1:16352658825:web:7b8618388583f9fafb8d58",
  measurementId: "G-FG015YT1D5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);