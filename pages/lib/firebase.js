import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
        apiKey: "AIzaSyDegeY43GSLFo1fnE7UsrAH4fOMkkdAwyQ",
        authDomain: "hymo-b7149.firebaseapp.com",
        databaseURL: "https://hymo-b7149-default-rtdb.firebaseio.com",
        projectId: "hymo-b7149",
        storageBucket: "hymo-b7149.appspot.com",
        messagingSenderId: "608462475470",
        appId: "1:608462475470:web:5f1452e2e6e8e66a41009f",
        measurementId: "G-KVHY6KYG09"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
