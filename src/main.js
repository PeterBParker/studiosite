// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkwnrzWg4gq7Cqt6JeSaN_jz5yOqwrJOY",
  authDomain: "studiosite-cbca7.firebaseapp.com",
  projectId: "studiosite-cbca7",
  storageBucket: "studiosite-cbca7.firebasestorage.app",
  messagingSenderId: "966232071120",
  appId: "1:966232071120:web:9521765beef4cd609ab7d5",
  measurementId: "G-GWZ9HXLTST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


