import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBhte0rNg7DY-tSUv1CN4CTEnYgn8lim-k",
    apiKey: "AIzaSyBhte0rNg7DY-tSUv1CN4CTEnYgn8lim-k",
  authDomain: "barter-system-893ad.firebaseapp.com",
  projectId: "barter-system-893ad",
  storageBucket: "barter-system-893ad.appspot.com",
  messagingSenderId: "145183545897",
  appId: "1:145183545897:web:ed57206af87012a281da38",
  measurementId: "G-7YR9V1ENL0"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //firebase.analytics();

 export default firebase.firestore()