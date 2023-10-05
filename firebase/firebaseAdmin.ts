import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import fs from 'fs';

const serviceAccount = {
  projectId: 'chatbot-ai-fb576',
  clientEmail:
    'firebase-adminsdk-ikl7p@chatbot-ai-fb576.iam.gserviceaccount.com',
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log('Firebase Admin initialized');
}

const adminDb = admin.firestore();

export { adminDb };
