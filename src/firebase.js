import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpM5Aesiu6IkggNnoqPUuHOzAsX3FNDk4",
  authDomain: "walk-talk-6852e.firebaseapp.com",
  projectId: "walk-talk-6852e",
  storageBucket: "walk-talk-6852e.appspot.com",
  messagingSenderId: "276716209548",
  appId: "1:276716209548:web:c994dc4c9931191e3f02a9"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();