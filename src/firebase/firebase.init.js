// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAirA3HvKDzqbAlJksoN0pJ5RGmI9QzxcA",
  authDomain: "art-and-craft-store-4c535.firebaseapp.com",
  projectId: "art-and-craft-store-4c535",
  storageBucket: "art-and-craft-store-4c535.appspot.com",
  messagingSenderId: "263415909326",
  appId: "1:263415909326:web:b7c926260b0742b609399f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)