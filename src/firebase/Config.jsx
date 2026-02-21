import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP5QOEDylqOVZeJCwX2Vo2PKSuLFSAnrw",
  authDomain: "mircro-seeds-login-with.firebaseapp.com",
  projectId: "mircro-seeds-login-with",
  storageBucket: "mircro-seeds-login-with.firebasestorage.app",
  messagingSenderId: "484522213430",
  appId: "1:484522213430:web:9dd218f12cf9480f575897",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
