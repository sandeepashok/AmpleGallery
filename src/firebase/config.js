import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, serverTimestamp, doc, deleteDoc, collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0gt2KuPJxqw-IbcQo9KaRtCEze5Vocq8",
    authDomain: "photogallery-app-22dd2.firebaseapp.com",
    projectId: "photogallery-app-22dd2",
    storageBucket: "photogallery-app-22dd2.appspot.com",
    messagingSenderId: "17664596085",
    appId: "1:17664596085:web:22f79052d0493bd1f9003c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const auth = getAuth(app);
const timeStamp = serverTimestamp;

export { projectStorage, projectFirestore, auth, timeStamp, GoogleAuthProvider, signInWithPopup, doc, deleteDoc, collection, query, orderBy, onSnapshot, addDoc };