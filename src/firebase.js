import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDwb4hMZz7R1ve0Dzk11WdmerKxwGjqPsQ",
  authDomain: "oddam-rzeczy-cb8bf.firebaseapp.com",
  projectId: "oddam-rzeczy-cb8bf",
  storageBucket: "oddam-rzeczy-cb8bf.appspot.com",
  messagingSenderId: "804420605346",
  appId: "1:804420605346:web:5157513a1a89778e3d0efb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
