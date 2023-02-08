import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDqG_jYgJuCx2wwBOfIkuHxdIEmu-P_xVE",
    authDomain: "mail-c7237.firebaseapp.com",
    projectId: "mail-c7237",
    storageBucket: "mail-c7237.appspot.com",
    messagingSenderId: "634899176973",
    appId: "1:634899176973:web:b8b4dae77a3f1ff14a7f44"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const login = firebase.login()


  export {login}
  export default db;