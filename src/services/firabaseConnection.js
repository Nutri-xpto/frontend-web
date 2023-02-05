import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyAH0IGEtno9MmwmIVYBzV-NurhAHUcusaA',
  authDomain: 'mydiet-5bed6.firebaseapp.com',
  projectId: 'mydiet-5bed6',
  storageBucket: 'mydiet-5bed6.appspot.com',
  messagingSenderId: '176666671168',
  appId: '1:176666671168:web:6da370db2bbab0223ec7a5',
  measurementId: 'G-E15QYMPPTT',
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
