

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAn-27LPnP6wJxTyXs2AsRC-F1NZJ2yHEE",
    authDomain: "ception-cf156.firebaseapp.com",
    projectId: "ception-cf156",
    storageBucket: "ception-cf156.appspot.com",
    messagingSenderId: "761579456897",
    appId: "1:761579456897:web:c9013f00ca949b229e4080",
    measurementId: "G-THKDPEN1TK"
};

function createFirebaseApp(config) {
    try {
      return getApp();
    } catch {
      return initializeApp(config);
    }
  }
  
  // const firebaseApp = initializeApp(firebaseConfig);
  const firebaseApp = createFirebaseApp(firebaseConfig);
  
  
  
  // Auth exports
  // export const auth = firebase.auth();
  export const auth = getAuth(firebaseApp);
  export const googleAuthProvider = new GoogleAuthProvider();
  
  // Firestore exports
  export const firestore = getFirestore(firebaseApp);
  // export const firestore = firebase.firestore();
  // export { firestore };
  // export const serverTimestamp = serverTimestamp;
  // export const fromMillis = fromMillis;
  // export const increment = increment;
  
  // Storage exports
  export const storage = getStorage(firebaseApp);
  export const STATE_CHANGED = 'state_changed';
  
/*
if (!firebase?.apps?.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
*/