import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZYGk1zoraXj4NNkjzm8M3mym10uGWpw4",
  authDomain: "tcp-cad-1.firebaseapp.com",
  projectId: "tcp-cad-1",
  storageBucket: "tcp-cad-1.firebasestorage.app",
  messagingSenderId: "246364242314",
  appId: "1:246364242314:web:70833ce73296d9de788873",
  measurementId: "G-5D59XY3VNT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
