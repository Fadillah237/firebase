import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCV5CKtwNoKcb4Z5TdRadCHm-xkBacpXW4',
  authDomain: 'sesi-12-76d8b.firebaseapp.com',
  projectId: 'sesi-12-76d8b',
  storageBucket: 'sesi-12-76d8b.firebasestorage.app',
  messagingSenderId: '417241851179',
  appId: '1:417241851179:web:f18a3fcaffb4af9380116e',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
