// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'


const firebaseConfig = {
    apiKey: "AIzaSyBUde7q2sTGK4Ku9Q5Eg3fOmjQrCc8DtZc",
    authDomain: "makeup-website-project.firebaseapp.com",
    databaseURL: "https://makeup-website-project-default-rtdb.firebaseio.com",
    projectId: "makeup-website-project",
    storageBucket: "makeup-website-project.appspot.com",
    messagingSenderId: "93392688156",
    appId: "1:93392688156:web:935651092350c7c64b7bd9",
    measurementId: "G-C0DTTNBX99"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { db, auth };
