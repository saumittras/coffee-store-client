import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7xbLKhPRqHXAeAQpwHfFfgg2Xk0Z3WYs",
  authDomain: "coffee-master-a37b5.firebaseapp.com",
  projectId: "coffee-master-a37b5",
  storageBucket: "coffee-master-a37b5.firebasestorage.app",
  messagingSenderId: "816307937702",
  appId: "1:816307937702:web:382ac8de527e8fcb59af67",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
