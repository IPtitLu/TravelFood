import * as firebase from 'firebase';
import 'firebase/firestore';//for using firestore functions, see https://stackoverflow.com/a/50684682/8236733

const firebaseConfig = {
  apiKey: "AIzaSyB2w9wu9V9ywq8SQAmx6kTu2uhkJCkJrZY",
  authDomain: "travelfood-b8471.firebaseapp.com",
  projectId: "travelfood-b8471",
  storageBucket: "travelfood-b8471.appspot.com",
  messagingSenderId: "392843370538",
  appId: "1:392843370538:web:ea64f63a72b3d29b882353"
};
try {
    firebase.initializeApp(firebaseConfig)
    firebase.firestore()
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

export const fs = firebase.firestore();