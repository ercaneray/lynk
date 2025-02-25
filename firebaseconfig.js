import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6SwggFZDzwkis7lG8IncP5nkZ3qgHnog",
    authDomain: "lynk-28875.firebaseapp.com",
    projectId: "lynk-28875",
    storageBucket: "lynk-28875.firebasestorage.app",
    messagingSenderId: "440034881387",
    appId: "1:440034881387:web:d1147f22e62ac1a716e62e",
    measurementId: "G-03VBX8KKP2"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };