// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjLdTgf5hMefEk9THI2yT1l_5LfPrpiaM",
  authDomain: "meuprojeto-fe82e.firebaseapp.com",
  projectId: "meuprojeto-fe82e",
  storageBucket: "meuprojeto-fe82e.appspot.com",
  messagingSenderId: "234686487225",
  appId: "1:234686487225:web:b1c0fefcd62cc115fb5968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};