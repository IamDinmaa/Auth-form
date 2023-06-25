import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATCMvBLF1ljod8tAiA8RsquiZ6aK7fIDo",
  authDomain: "my-authentication-3cb80.firebaseapp.com",
  projectId: "my-authentication-3cb80",
  storageBucket: "my-authentication-3cb80.appspot.com",
  messagingSenderId: "1005699744176",
  appId: "1:1005699744176:web:485a44e92e26fbe8e41675",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
