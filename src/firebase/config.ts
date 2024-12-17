import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '5',
  authDomain: 'ses',
  projectId: 'ses',
  storageBucket: 'sesiapp',
  messagingSenderId: '41179',
  appId: '1:417241851180116e',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
