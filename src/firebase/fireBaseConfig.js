import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBH0gPS0ZwGr4r19rPG6KmJtbGbCxsQirE',
  authDomain: 'rack-a-pinard.firebaseapp.com',
  projectId: 'REACT_APP_PROJECT_ID=rack-a-pinard',
  storageBucket: 'rack-a-pinard.appspot.com',
  messagingSenderId: '141140659387',
  appId: '1:141140659387:web:7359bf8e699f2e19652d9e',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
