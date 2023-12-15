import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyC4-eYqMqYWUP_XXKbcdGvQXCa8735IFvA",
  authDomain: "app-social-69bbc.firebaseapp.com",
  projectId: "app-social-69bbc",
  storageBucket: "app-social-69bbc.appspot.com",
  messagingSenderId: "27233960972",
  appId: "1:27233960972:web:d8818976d5a8a12da55a29",
  measurementId: "G-MD0947NL4H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,storage,firestore};
