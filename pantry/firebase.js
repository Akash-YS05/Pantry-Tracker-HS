// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ7SSSfQOFwtxj6NYQn8HQ5UtpRyOCJQ4",
  authDomain: "pantryapp-7ab57.firebaseapp.com",
  projectId: "pantryapp-7ab57",
  storageBucket: "pantryapp-7ab57.appspot.com",
  messagingSenderId: "595184626351",
  appId: "1:595184626351:web:0a907f0c5e529e591d825a",
  measurementId: "G-QF131X2D8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); 

export {firestore}