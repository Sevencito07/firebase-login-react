
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcnn4jm_Jk3MHiYV2akkGCS7IkA9EOHn0",
  authDomain: "login-app-52fa8.firebaseapp.com",
  projectId: "login-app-52fa8",
  storageBucket: "login-app-52fa8.appspot.com",
  messagingSenderId: "483082908179",
  appId: "1:483082908179:web:4355904541b80d763b05e6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)