// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCH_YTroTIJTHbYB6m23e3DxPDPTqqK04Y',
    authDomain: 'instagram-clone-c2c36.firebaseapp.com',
    projectId: 'instagram-clone-c2c36',
    storageBucket: 'instagram-clone-c2c36.appspot.com',
    messagingSenderId: '1073406211895',
    appId: '1:1073406211895:web:d776f0563ea5757a104cb2',
    measurementId: 'G-VE3SQ3DTMZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
