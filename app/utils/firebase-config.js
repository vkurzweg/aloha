import firebase from 'firebase';
// TODO: hide variables
const config = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDE-PEBoope_8b-0qRtqvv5DlwQa-9QLpQ",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "aloha-e38ea.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "https://aloha-e38ea.firebaseio.com",
  projectId: "aloha-e38ea",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ||  "aloha-e38ea.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID || "839998583595"
};
const fb = firebase.initializeApp(config);
const db = fb.database();
const ref = db.ref;

export {
  fb,
  db,
  ref,
};
