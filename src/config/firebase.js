
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyKFkwqjNjdZyMdnG88cPtWWJEoEzS4Vw",
  authDomain: "chat-app-b3b2d.firebaseapp.com",
  projectId: "chat-app-b3b2d",
  storageBucket: "chat-app-b3b2d.firebasestorage.app",
  messagingSenderId: "1049862805338",
  appId: "1:1049862805338:web:c6ea1ba9241119079a8563",
  measurementId: "G-L5XW0DN8FW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);