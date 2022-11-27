import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database'

const fire = firebase.initializeApp({
    apiKey: "AIzaSyDKDBVkBRUxBCxoXjaXf_4s9i6WW1OWpyQ",
    authDomain: "todoreact-aa7f6.firebaseapp.com",
    databaseURL: "https://todoreact-aa7f6-default-rtdb.firebaseio.com",
    projectId: "todoreact-aa7f6",
    storageBucket: "todoreact-aa7f6.appspot.com",
    messagingSenderId: "101348855211",
    appId: "1:101348855211:web:ebd5a14ba09fca0f0b96ee"
  });
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
export const auth = fire.auth();
export const storage= firebase.storage()

export const db=firebase.database();
export default {fire,firebase};