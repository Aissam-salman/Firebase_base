import './styles.css'

import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, collection, getDocs, getDoc} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe1WhCpr64wN7OFpCokcfsamEG-ZI3mKY",
    authDomain: "nasawi.firebaseapp.com",
    projectId: "nasawi",
    storageBucket: "nasawi.appspot.com",
    messagingSenderId: "895767124758",
    appId: "1:895767124758:web:579dfec30738c463020e37",
    measurementId: "G-J8LB4R743B"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);


//   const db = getFirestore(app);
//   db.collection('todos').getDoc();
//   const todosCol = collection(db, 'todos');
//   const snapshot = await getDocs(todosCol); 

  //detect  auth state 
  onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in !');
    } else {
        console.log('No user');
    }
  });