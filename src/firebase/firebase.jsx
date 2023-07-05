// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANupwn9blin8bpLoCwLmGxRjTeIAqz4Vs",
  authDomain: "fir-1-f62aa.firebaseapp.com",
  projectId: "fir-1-f62aa",
  storageBucket: "fir-1-f62aa.appspot.com",
  messagingSenderId: "648867939574",
  appId: "1:648867939574:web:d3eb21cb440a940d7158d7",
  databaseURL:
    "https://fir-1-f62aa-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
