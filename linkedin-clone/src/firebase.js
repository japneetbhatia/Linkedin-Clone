import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCh45mtBevAYZ597R09mrUjunxX-BWccOs",
    authDomain: "linkedin-clone-f7c18.firebaseapp.com",
    projectId: "linkedin-clone-f7c18",
    storageBucket: "linkedin-clone-f7c18.appspot.com",
    messagingSenderId: "508083490464",
    appId: "1:508083490464:web:3b07ab5e558b00f09983c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};