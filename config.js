import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8SgPAIR2xUvZRVYI77p--NT72mnOIP7s",
  authDomain: "complaint-forum-aa6c9.firebaseapp.com",
  projectId: "complaint-forum-aa6c9",
  storageBucket: "complaint-forum-aa6c9.appspot.com",
  messagingSenderId: "491609282234",
  appId: "1:491609282234:web:bc4da34af0bb5f7b5dd483"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
