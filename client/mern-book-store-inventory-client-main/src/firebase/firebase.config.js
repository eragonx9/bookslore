// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXVXtLyeCexQ1F_WKjCN18YnbwXOumMbY",
  authDomain: "book-store-70f77.firebaseapp.com",
  projectId: "book-store-70f77",
  storageBucket: "book-store-70f77.appspot.com",
  messagingSenderId: "553245114660",
  appId: "1:553245114660:web:6efd48c476ede0fdbd73b1",
  measurementId: "G-8WHL5S8JPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;