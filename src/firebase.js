import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn0rjEaSKQEasFEwxLjSOJ2vcr-8BL5Hk",
    authDomain: "linkedin-clone-e6aef.firebaseapp.com",
    projectId: "linkedin-clone-e6aef",
    storageBucket: "linkedin-clone-e6aef.appspot.com",
    messagingSenderId: "209188208230",
    appId: "1:209188208230:web:c575cfcec23f82a5e5f7a7",
    measurementId: "G-QPFPLY9RSL"
  };

  //to initialize your app
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //to connect your firebas to the databse 
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage(); //because we will gonna be storing our images somewhere
  export { auth, provider, storage };
  export default db;