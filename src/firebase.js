import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDq_mxuyFqGDJt-SgTLVI5dN0mkBfwE8M",
  authDomain: "react-hooks-blog-a482e.firebaseapp.com",
  projectId: "react-hooks-blog-a482e",
  storageBucket: "react-hooks-blog-a482e.appspot.com",
  messagingSenderId: "294164973850",
  appId: "1:294164973850:web:8181fcceecd28cda5604a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();