import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBic2SjwGEfiPWagqxXtm__UFXJc09hmxg",
  authDomain: "strength-fitness-club.firebaseapp.com",
  projectId: "strength-fitness-club",
  storageBucket: "strength-fitness-club.appspot.com",
  messagingSenderId: "1072104568482",
  appId: "1:1072104568482:web:263fffc347d078345e89fb",
  measurementId: "G-MG9WZ26LHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
