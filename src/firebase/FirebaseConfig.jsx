import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7KLNgGEBFfrnJcct2oGdWyc2q34-o3tc',
  authDomain: 'react-ecomm-project-9c748.firebaseapp.com',
  projectId: 'react-ecomm-project-9c748',
  storageBucket: 'react-ecomm-project-9c748.appspot.com',
  messagingSenderId: '827008631002',
  appId: '1:827008631002:web:302251e0cffcb084ca65e3',
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
