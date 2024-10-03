import { initializeApp } from '@react-native-firebase/app';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDYgDHbc_FIcI3MRIMF3do_L5Jg1FfJpVQ',
  authDomain: 'student-managment-app-3a342.firebaseapp.com',
  projectId: 'student-managment-app-3a342',
  storageBucket: 'student-managment-app-3a342.appspot.com',
  messagingSenderId: '1035211579623',
  appId: '1:1035211579623:android:92dd5e1d62995d3c6a8242',
  databaseURL: 'https://student-managment-app-3a342.firebaseio.com',
  //measurementId: 'YOUR_MEASUREMENT_ID', // Optional
};

// Initialize Firebase
const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();

export default app;
