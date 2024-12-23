// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJTE71_cnLNkTIoWtgMUWRoU9t4WJMgiY",
  authDomain: "coffee-store-server-a4711.firebaseapp.com",
  projectId: "coffee-store-server-a4711",
  storageBucket: "coffee-store-server-a4711.firebasestorage.app",
  messagingSenderId: "826449801944",
  appId: "1:826449801944:web:9920ca6c6cfae3e2189dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)