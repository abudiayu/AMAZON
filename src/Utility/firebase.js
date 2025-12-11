// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Authentication functions from Firebase v9 SDK
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Optional: if you need Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHkQwHsUYEfnpDt2uYR3G5g2BubyJrIY",
  authDomain: "fir-196c7.firebaseapp.com",
  projectId: "fir-196c7",
  storageBucket: "fir-196c7.firebasestorage.app",
  messagingSenderId: "1020882852258",
  appId: "1:1020882852258:web:a0d8ce878b94ed2e4abafb",
  measurementId: "G-97PF3CQVCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore (optional)
const db = getFirestore(app);

// Analytics (optional)
const analytics = getAnalytics(app);

// Export Firebase services
export { auth, db, analytics };
export default app;
