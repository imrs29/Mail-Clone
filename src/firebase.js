import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7vWkHz0Cmt3iUtApZW1Av91Wv-jVUMuU",
  authDomain: "clone-ritu.firebaseapp.com",
  projectId: "clone-ritu",
  storageBucket: "clone-ritu.appspot.com",
  messagingSenderId: "308005654921",
  appId: "1:308005654921:web:cbfb5216faa14463e35158",
  measurementId: "G-G7GQ3YLC7D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
