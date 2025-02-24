// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5JCjUdm3T8yOYUxFzBFP9vD-m8xJ4gJk",
  authDomain: "crud-7dc09.firebaseapp.com",
  projectId: "crud-7dc09",
  storageBucket: "crud-7dc09.firebasestorage.app",
  messagingSenderId: "88528751429",
  appId: "1:88528751429:web:302422a3814167ef5b0c2c",
  measurementId: "G-QH6VJGH66V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
