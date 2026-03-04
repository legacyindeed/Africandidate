import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAiC5Ix6nrnZgJmh7gxSczrQnJS46fEErA",
  authDomain: "africandidate-01.firebaseapp.com",
  projectId: "africandidate-01",
  storageBucket: "africandidate-01.firebasestorage.app",
  messagingSenderId: "461125959121",
  appId: "1:461125959121:web:49b124d59bb5527e4bb4f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Admin email(s) - add your admin email here
export const ADMIN_EMAILS = ['africandidate@gmail.com'];

export default app;
