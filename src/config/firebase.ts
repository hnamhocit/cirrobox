import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb0rJf5hZ9wGBj2f2SCOfYXjryOqDFumw",
  authDomain: "cirro-box.firebaseapp.com",
  projectId: "cirro-box",
  storageBucket: "cirro-box.firebasestorage.app",
  messagingSenderId: "412366071600",
  appId: "1:412366071600:web:bf8d80bb6b136c6d660af5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
