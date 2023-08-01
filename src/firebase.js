import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCIABzM8MPi93yr5NeZq9kyJmFAQZ7q3yw",
    authDomain: "bhalchandra1-947be.firebaseapp.com",
    projectId: "bhalchandra1-947be",
    storageBucket: "bhalchandra1-947be.appspot.com",
    messagingSenderId: "268005251136",
    appId: "1:268005251136:web:d9b529e977e88bb49e27a5",
    measurementId: "G-MJX978FZD6"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;