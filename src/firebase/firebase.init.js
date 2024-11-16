// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_cLZEIRPdtTdqbgt1PUa1CWK3lH35fI",
  authDomain: "dragon-news-48c10.firebaseapp.com",
  projectId: "dragon-news-48c10",
  storageBucket: "dragon-news-48c10.firebasestorage.app",
  messagingSenderId: "22840459334",
  appId: "1:22840459334:web:7c51017904b9c07ef44a47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;