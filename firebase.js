import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'clone-7b997.firebaseapp.com',
  projectId: 'clone-7b997',
  storageBucket: 'clone-7b997.appspot.com',
  messagingSenderId: '264848646527',
  appId: '1:264848646527:web:b2d9283771696a08493a4a',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default db