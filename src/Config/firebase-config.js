import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBtN8yjG2x5LV7vQ_flUTftDVqwNEEpQJY",
  authDomain: "event-management-system-f6601.firebaseapp.com",
  projectId: "event-management-system-f6601",
  storageBucket: "event-management-system-f6601.appspot.com",
  messagingSenderId: "906172562740",
  appId: "1:906172562740:web:305072f0c2afec6007f961",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)