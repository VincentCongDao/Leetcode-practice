// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API,
	authDomain: "expense-66d53.firebaseapp.com",
	projectId: "expense-66d53",
	storageBucket: "expense-66d53.appspot.com",
	messagingSenderId: "232964938276",
	appId: "1:232964938276:web:d9b1d92eb8a837fac5d6b1",
	measurementId: "G-GSZVWRCC11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFirebase = getFirestore(app);

export const auth = getAuth(app);
export default app;

export { app, dbFirebase };
