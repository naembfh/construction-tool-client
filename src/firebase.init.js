// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBbWHT9JWue_m8e-bYA6HkgNK4OIsxrqE",
  authDomain: "construction-tool.firebaseapp.com",
  projectId: "construction-tool",
  storageBucket: "construction-tool.appspot.com",
  messagingSenderId: "812247735024",
  appId: "1:812247735024:web:202e81cba2d87265210035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;