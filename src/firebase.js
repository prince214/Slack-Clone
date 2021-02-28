import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC43Ei9fzscAm-mz9tBBkWVaZZNbiSpyt0",
    authDomain: "slack-clone-9a8cd.firebaseapp.com",
    projectId: "slack-clone-9a8cd",
    storageBucket: "slack-clone-9a8cd.appspot.com",
    messagingSenderId: "288800686129",
    appId: "1:288800686129:web:90f760b8e580d193679510"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider } ;
  export default db;
