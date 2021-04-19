import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0gt2KuPJxqw-IbcQo9KaRtCEze5Vocq8",
    authDomain: "photogallery-app-22dd2.firebaseapp.com",
    projectId: "photogallery-app-22dd2",
    storageBucket: "photogallery-app-22dd2.appspot.com",
    messagingSenderId: "17664596085",
    appId: "1:17664596085:web:22f79052d0493bd1f9003c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };