import * as firebase from 'firebase'
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDOxOsa1yOK4EL_7pFTVUAkLiwe31jxXXU",
  authDomain: "todo-e0cd0.firebaseapp.com",
  databaseURL: "https://todo-e0cd0.firebaseio.com",
  projectId: "todo-e0cd0",
  storageBucket: "todo-e0cd0.appspot.com",
  messagingSenderId: "863784504836"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.firestore();
