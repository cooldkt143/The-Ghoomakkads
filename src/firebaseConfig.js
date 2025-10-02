import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFsb73UvgPjUEi9pNKHX2E2cy1ho8IBeA",
  authDomain: "the-ghoomakkads.firebaseapp.com",
  projectId: "the-ghoomakkads",
  storageBucket: "the-ghoomakkads.firebasestorage.app",
  messagingSenderId: "215049136393",
  appId: "1:215049136393:web:2a6707e3fa750566ee4bd8",
  measurementId: "G-K7P63XTMPL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();