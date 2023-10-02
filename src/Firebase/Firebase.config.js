
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnMV_6GWpIKZ_m9lU-_ycqBBlqOSBzOjA",
  authDomain: "dragon-news-auth-2ff33.firebaseapp.com",
  projectId: "dragon-news-auth-2ff33",
  storageBucket: "dragon-news-auth-2ff33.appspot.com",
  messagingSenderId: "222582812493",
  appId: "1:222582812493:web:48826027d3e4a2ced79104"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;