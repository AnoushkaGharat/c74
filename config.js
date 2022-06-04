import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBk20gESfGyqfOOigKOtT65sVdIbrrt0nc",
  authDomain: "e-library-b4bc5.firebaseapp.com",
  projectId: "e-library-b4bc5",
  storageBucket: "e-library-b4bc5.appspot.com",
  messagingSenderId: "186600295086",
  appId: "1:186600295086:web:3f3947af197505fa3b7b3f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
