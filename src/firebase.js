import firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvEdQnDSpenTXROvf0rj5-2DBuftqEi28",
    authDomain: "clone-2a27e.firebaseapp.com",
    projectId: "clone-2a27e",
    storageBucket: "clone-2a27e.appspot.com",
    messagingSenderId: "230952717884",
    appId: "1:230952717884:web:0f533a48a470ecfe503d39"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db,auth};