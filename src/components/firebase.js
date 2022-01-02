import { initializeApp } from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC8y0wUIpn4E6s8tA-4diaGEThH2TKXz-8",
    authDomain: "reactive-retail.firebaseapp.com",
    databaseURL: "https://reactive-retail-default-rtdb.firebaseio.com",
    projectId: "reactive-retail",
    storageBucket: "reactive-retail.appspot.com",
    messagingSenderId: "985750520564",
    appId: "1:985750520564:web:8f633b0e3cd4cad75c94a1"
  };

// setting a var that initializes the application
const firebase = initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;
