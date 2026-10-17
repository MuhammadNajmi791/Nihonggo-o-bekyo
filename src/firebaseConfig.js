import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyA5Xasye0s9axWAIKVSGGjmNUVw7o3RdhE",
  authDomain: "learning-japanese-6c221.firebaseapp.com",
  databaseURL: "https://learning-japanese-6c221-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learning-japanese-6c221",
  storageBucket: "learning-japanese-6c221.firebasestorage.app",
  messagingSenderId: "575102957314",
  appId: "1:575102957314:web:7f5143ec3a355fca0af41b"
};

export const app = initializeApp(firebaseConfig);