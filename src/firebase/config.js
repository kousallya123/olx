import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGoFqTfpZiyblqlAfLyakiOKN3pAexex8",
    authDomain: "fir-34e00.firebaseapp.com",
    projectId: "fir-34e00",
    storageBucket: "fir-34e00.appspot.com",
    messagingSenderId: "923139934090",
    appId: "1:923139934090:web:840bb78ce0e4093233aa73",
    measurementId: "G-9JPKFXFCLG"
  };

export default firebase.initializeApp(firebaseConfig)