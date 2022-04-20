// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMJhd5qrVlUpEXm5RDIuPR-1n3sgcOWxw",
  authDomain: "travel-to-go-6c371.firebaseapp.com",
  projectId: "travel-to-go-6c371",
  storageBucket: "travel-to-go-6c371.appspot.com",
  messagingSenderId: "731217095052",
  appId: "1:731217095052:web:a4d1ed3bdd5302778dcea9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
