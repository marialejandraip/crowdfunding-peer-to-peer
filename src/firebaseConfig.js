import firebase from 'firebase/app';
import 'firebase/auth'; // shi
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAKrLVraRNpJQgEscL445NbQS-lg9SmeRc",
  authDomain: "crowdfunding-peer-to-peer.firebaseapp.com",
  projectId: "crowdfunding-peer-to-peer",
  storageBucket: "crowdfunding-peer-to-peer.appspot.com",
  messagingSenderId: "657955917332",
  appId: "1:657955917332:web:f3fef14d7c77ab4daf6101",
  measurementId: "G-K1EGTY96YN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
//firebase.analytics();

export {auth, storage, firebase}