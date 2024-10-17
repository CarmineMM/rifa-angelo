// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtYLPbeEGTLcl0hXJOHkCxLHUJQbi-6kE",
    authDomain: "rifa-f4e3e.firebaseapp.com",
    projectId: "rifa-f4e3e",
    storageBucket: "rifa-f4e3e.appspot.com",
    messagingSenderId: "1020166494803",
    appId: "1:1020166494803:web:75df0e1e28e49fb5c004a6",
    measurementId: "G-K3DG3GV039",
    databaseURL: "https://rifa-f4e3e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app)

export default app