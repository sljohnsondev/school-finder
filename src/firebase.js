import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCWhezqqYhhc91UHKwYrdpxtgRZCkd3CGc",
  authDomain: "school-finder-86e85.firebaseapp.com",
  databaseURL: "https://school-finder-86e85.firebaseio.com",
  storageBucket: "school-finder-86e85.appspot.com",
  messagingSenderId: "653479077769"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => firebase.auth().signOut();
export const reference = firebase.database().ref('dps_schools');
