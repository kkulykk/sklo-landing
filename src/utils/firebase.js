// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6GHO6tB5bd1T5HlTRppIqr7SkCDlWp8",
  authDomain: "sklo-landing.firebaseapp.com",
  databaseURL: "https://sklo-landing-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sklo-landing",
  storageBucket: "sklo-landing.appspot.com",
  messagingSenderId: "1025696312226",
  appId: "1:1025696312226:web:adc3d4115a3178def520fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;