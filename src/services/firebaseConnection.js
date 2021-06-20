//Firebase
import firebase from "firebase/app";

let firebaseConfig = {
  apiKey: "AIzaSyA06dwEWdiakDizr5NoxJKA5LTg9SSqUb4",
  authDomain: "finances-d25c6.firebaseapp.com",
  projectId: "finances-d25c6",
  storageBucket: "finances-d25c6.appspot.com",
  messagingSenderId: "283704888200",
  appId: "1:283704888200:web:c703412b85b2512185483d",
};

// Initialize Firebase
if (firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
