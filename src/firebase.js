import firebase from 'firebase/compat/app' 
// '/compat' is necessary for a compatibility between V8 and V9 of Firebase
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import "firebase/compat/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCYDGRFBM7R-EfmXpYftlamSMJEGzzOGKU",
    authDomain: "linkedin-clone-ej.firebaseapp.com",
    projectId: "linkedin-clone-ej",
    storageBucket: "linkedin-clone-ej.appspot.com",
    messagingSenderId: "486082646279",
    appId: "1:486082646279:web:0d061d9a4885958c6a35a2",
    measurementId: "G-CPS8ZWQEWQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = app.firestore()
db.settings({ experimentalForceLongPolling: true, merge: true })
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
