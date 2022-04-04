import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6vE87w8METGnF_X93r1neBiTPS5GsNDk",
    authDomain: "sopic-35195.firebaseapp.com",
    projectId: "sopic-35195",
    storageBucket: "sopic-35195.appspot.com",
    messagingSenderId: "991731829714",
    appId: "1:991731829714:web:9d3bb7a4f01c7ff4ccd60b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new GoogleAuthProvider();

export { auth, db, provider }; 