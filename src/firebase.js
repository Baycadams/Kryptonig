
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATxSYkN80EsRbPmGMKKKuzo169ZXvQI54",
  authDomain: "kryptonig.firebaseapp.com",
  databaseURL: "https://kryptonig-default-rtdb.firebaseio.com",
  projectId: "kryptonig",
  storageBucket: "kryptonig.appspot.com",
  messagingSenderId: "789240259240",
  appId: "1:789240259240:web:745ccd8e6f44955c86189d",
  measurementId: "G-VHJXZP1LW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)