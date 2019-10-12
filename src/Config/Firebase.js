import firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcJHqeSmBmjrsOl16ehabk7iL6fQLDp3M",
  authDomain: "ngaji-yuk-584e0.firebaseapp.com",
  databaseURL: "https://ngaji-yuk-584e0.firebaseio.com",
  projectId: "ngaji-yuk-584e0",
  storageBucket: "ngaji-yuk-584e0.appspot.com",
  messagingSenderId: "237620387051",
  appId: "1:237620387051:web:d374db3e385ef8763b72ae",
  measurementId: "G-66WJSFVX8Y"
};
firebase.initializeApp(firebaseConfig);

export const Firestore = firebase.firestore()
export default firebase;