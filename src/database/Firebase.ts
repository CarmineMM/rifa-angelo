// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const {
    VITE_API_KEY: FIREBASE_API_KEY,
    VITE_AUTH_DOMAIN: FIREBASE_AUTH_DOMAIN,
    VITE_PROJECT_ID: FIREBASE_PROJECT_ID,
    VITE_STORAGE_BUCKET: FIREBASE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID: FIREBASE_MESSAGING_SENDER_ID,
    VITE_APP_ID: FIREBASE_APP_ID,
    VITE_MEASUREMENT_ID: FIREBASE_MEASUREMENT_ID,
    VITE_DATABASE_URL: FIREBASE_DATABASE_URL
} = import.meta.env


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
    databaseURL: FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app)

export default app