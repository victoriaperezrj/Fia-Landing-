import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSDTl4WznI_5vZshp37IvrcERtLmvkLkk",
  authDomain: "fia-academia.firebaseapp.com",
  projectId: "fia-academia",
  storageBucket: "fia-academia.firebasestorage.app",
  messagingSenderId: "437035960676",
  appId: "1:437035960676:web:6bf7db0cc124906c471271",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
