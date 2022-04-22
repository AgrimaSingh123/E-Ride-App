import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDgyZdMU9m9BNTB4PILKzVBL1S_OAyzrlE",
  authDomain: "e-ride-e691c.firebaseapp.com",
  projectId: "e-ride-e691c",
  storageBucket: "e-ride-e691c.appspot.com",
  messagingSenderId: "994386952997",
  appId: "1:994386952997:web:6b8269a0991c13356d10cc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
