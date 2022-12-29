import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL3RHGwd7f3_sqO_PfokYFehp7KowgWlA",
  authDomain: "netflix-clone-62ad3.firebaseapp.com",
  projectId: "netflix-clone-62ad3",
  storageBucket: "netflix-clone-62ad3.appspot.com",
  messagingSenderId: "920516118038",
  appId: "1:920516118038:web:3cafebbebb2046553e1737",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
// export default db;
