import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5hezr79SkWsscaYqIZHcfopYLYE8Yiq4",
  authDomain: "coffee-beans-ac5a4.firebaseapp.com",
  projectId: "coffee-beans-ac5a4",
  storageBucket: "coffee-beans-ac5a4.appspot.com",
  messagingSenderId: "1026870496821",
  appId: "1:1026870496821:web:3c22f4a127069ff87c2b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;