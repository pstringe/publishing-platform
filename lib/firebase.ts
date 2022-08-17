import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAn-27LPnP6wJxTyXs2AsRC-F1NZJ2yHEE",
    authDomain: "ception-cf156.firebaseapp.com",
    projectId: "ception-cf156",
    storageBucket: "ception-cf156.appspot.com",
    messagingSenderId: "761579456897",
    appId: "1:761579456897:web:c9013f00ca949b229e4080",
    measurementId: "G-THKDPEN1TK"
};

if (!firebase?.apps?.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
