import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBcMrvWoP9jHFPkmRBP9SHaFJ0Lqdy7wO8",
    authDomain: "pro-c60-school-attendenc-33aae.firebaseapp.com",
    databaseURL: "https://pro-c60-school-attendenc-33aae-default-rtdb.firebaseio.com",
    projectId: "pro-c60-school-attendenc-33aae",
    storageBucket: "pro-c60-school-attendenc-33aae.appspot.com",
    messagingSenderId: "646603434634",
    appId: "1:646603434634:web:dc5cb943cf37df21919b73"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
