import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from 'firebase/firestore';

// firebase config 
const firebaseConfig = {
  apiKey: "AIzaSyBaD20ZV9mDwg2gLo4xGVrW7dkED7DQ-AA",
  authDomain: "linkedin-clone-3b28d.firebaseapp.com",
  projectId: "linkedin-clone-3b28d",
  storageBucket: "linkedin-clone-3b28d.appspot.com",
  messagingSenderId: "664840629094",
  appId: "1:664840629094:web:fc91e84c17c028d445b6a7",
};



//Initilize app
initializeApp(firebaseConfig)

// get services
const db = getFirestore()

//Auth
const auth = getAuth()

//collection reference
const colRef = collection(db,"user")


const provider = new GoogleAuthProvider()




export { db, auth, colRef, provider };
