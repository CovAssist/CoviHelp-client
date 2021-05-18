// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDs9jNTBV7CnR_gOQju9d9RdEG_kFMm8rk',
  authDomain: 'covidcare-a2b24.firebaseapp.com',
  projectId: 'covidcare-a2b24',
  storageBucket: 'covidcare-a2b24.appspot.com',
  messagingSenderId: '87659802321',
  appId: '1:87659802321:web:4408860ba7c53049af5ff0',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
