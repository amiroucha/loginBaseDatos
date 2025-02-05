// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzyAyEKHI7nAjr4BNUGBBM6TAdqX1hxGg",
  authDomain: "login-firebase-bf0cc.firebaseapp.com",
  projectId: "login-firebase-bf0cc",
  storageBucket: "login-firebase-bf0cc.firebasestorage.app",
  messagingSenderId: "82396762647",
  appId: "1:82396762647:web:d8f2aa0787563d7a288252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//lo que añado 
//auth tengo los usuarios 
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//db tengo la base de datos

export const db = getFirestore(app);

