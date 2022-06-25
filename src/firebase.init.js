// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQZ3wBEYUpVg-_HyxUAYURbt1u8ZvExuA",
  authDomain: "user-list-a4c12.firebaseapp.com",
  projectId: "user-list-a4c12",
  storageBucket: "user-list-a4c12.appspot.com",
  messagingSenderId: "830283179607",
  appId: "1:830283179607:web:47290d2491571b487b6512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;