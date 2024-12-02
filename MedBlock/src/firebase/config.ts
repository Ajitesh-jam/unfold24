import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpOT2KxA0FqWUnZnNZeILITRXXeBIeipE",
    authDomain: "medblock-9305e.firebaseapp.com",
    projectId: "medblock-9305e",
    storageBucket: "medblock-9305e.appspot.com",
    messagingSenderId: "266663758075",
    appId: "1:266663758075:web:184fb1b14f56e7eb76085e",
    measurementId: "G-VKM81ZZVQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);