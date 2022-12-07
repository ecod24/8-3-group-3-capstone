// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // getMessaging,
  // collection,
  // getDocs,
} from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB61dZXRVaSrHTr1vZX5cOT2jCo3Sf59n8",
  authDomain: "tablefortwo-cbd5f.firebaseapp.com",
  projectId: "tablefortwo-cbd5f",
  storageBucket: "tablefortwo-cbd5f.appspot.com",
  messagingSenderId: "156844208789",
  appId: "1:156844208789:web:0f74598ea12931708d619c",
  measurementId: "G-SJ7CCS7N5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const messaging = getMessaging(app);
// const analytics = getAnalytics(app);

// async function getMessages(db) {
//   const messagesCol = collection(db, "messages");
//   const messagesSnapshot = await getDocs(messagesCol);
//   const messageList = messagesSnapshot.docs.map((doc) => doc.data());
//   return messageList;
// }

export default app;
