import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration

//bizarre error with firebase won't let me use process.env
const firebaseConfig = {
  apiKey: 'AIzaSyDXw_u2mM_-KN9zLTs1Ow8cZUflN8RNQKA',
  authDomain: 'chatbot-ai-fb576.firebaseapp.com',
  projectId: 'chatbot-ai-fb576',
  storageBucket: 'chatbot-ai-fb576.appspot.com',
  messagingSenderId: '873772599494',
  appId: '1:873772599494:web:df57967321205d36b6afc7',
  measurementId: 'G-KFCC78Y90E',
};
// Initialize Firebase using Singleton Pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
