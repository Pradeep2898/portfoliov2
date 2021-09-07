import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB1KZcaNVomsfXbUKbjtJtxLAKd2Dh5-rk",
  authDomain: "portfolio-7c025.firebaseapp.com",
  databaseURL: "https://portfolio-7c025.firebaseio.com",
  projectId: "portfolio-7c025",
  storageBucket: "portfolio-7c025.appspot.com",
  messagingSenderId: "301122826477",
  appId: "1:301122826477:web:2b974c70023fe0d3d79ce4",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase.firestore();
