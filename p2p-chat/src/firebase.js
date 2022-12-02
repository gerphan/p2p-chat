// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl1BRqEhNXaJggG6O2bbhiwWfMawNnDvI",
  authDomain: "computernetwork-9dfeb.firebaseapp.com",
  projectId: "computernetwork-9dfeb",
  storageBucket: "computernetwork-9dfeb.appspot.com",
  messagingSenderId: "734668976914",
  appId: "1:734668976914:web:e9118f695e0452129fb9cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);