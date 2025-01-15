// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_mZj67tQaitPPXEEl5AdzdTfdNz4rDOY",
  authDomain: "contactformapp-abf12.firebaseapp.com",
  projectId: "contactformapp-abf12",
  storageBucket: "contactformapp-abf12.firebasestorage.app",
  messagingSenderId: "471243061417",
  appId: "1:471243061417:web:65d562b331219e488451b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db instance
export { db };
