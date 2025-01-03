// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzsH5gaho0hcIK6E6-0X5xIlHlaoSpKAE",
  authDomain: "future-fuelling1.firebaseapp.com",
  projectId: "future-fuelling1",
  storageBucket: "future-fuelling1.firebasestorage.app",
  messagingSenderId: "617537864535",
  appId: "1:617537864535:web:f8f3fdc79f3f04df757412",
  measurementId: "G-X94CF7G812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 
export const db = getFirestore(app);
export default app;
