import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyBZ2Llea-x8DsChG9aoKIak4yWDYx0i1tA",
  authDomain: "my-social-won.firebaseapp.com",
  projectId: "my-social-won",
  storageBucket: "my-social-won.appspot.com",
  messagingSenderId: "277663959377",
  appId: "1:277663959377:web:3ed2da930a3df811bd6b70",
  measurementId: "G-68ZDNFEB85"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,storage,firestore};
