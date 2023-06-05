// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe1WhCpr64wN7OFpCokcfsamEG-ZI3mKY",
  authDomain: "nasawi.firebaseapp.com",
  databaseURL: "https://nasawi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nasawi",
  storageBucket: "nasawi.appspot.com",
  messagingSenderId: "895767124758",
  appId: "1:895767124758:web:579dfec30738c463020e37",
  measurementId: "G-J8LB4R743B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


console.log(app);