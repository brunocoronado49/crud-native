import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0h6oBQ-5ni2QUyOpyRCkBwBCO-TrEjjo",
  authDomain: "crdu-native.firebaseapp.com",
  projectId: "crdu-native",
  storageBucket: "crdu-native.appspot.com",
  messagingSenderId: "213066839597",
  appId: "1:213066839597:web:dcd888d0da4b0ea0c7aaa4",
  measurementId: "G-EVGC74YWPS"
};

initializeApp(firebaseConfig);

export const db = getFirestore();