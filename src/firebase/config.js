import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrHpMmd0oYtv5l4tiI_lrmx1xs3NlZXV4",
  authDomain: "dojoblaze.firebaseapp.com",
  projectId: "dojoblaze",
  storageBucket: "dojoblaze.appspot.com",
  messagingSenderId: "292477514171",
  appId: "1:292477514171:web:f71065b391a4580247149e"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };