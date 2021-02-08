import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDfW1ORNF4GcJowcEs1CmfMcTd0XqMcTYY",
    authDomain: "react-contact-form-9665c.firebaseapp.com",
    projectId: "react-contact-form-9665c",
    storageBucket: "react-contact-form-9665c.appspot.com",
    messagingSenderId: "894868418500",
    appId: "1:894868418500:web:46fc10d42f4eeca877fe91"
  });
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var db = firebaseApp.firestore();

  export { db };