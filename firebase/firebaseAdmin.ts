import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const serviceAccount = {
  projectId: 'chatbot-ai-fb576',
  clientEmail:
    'firebase-adminsdk-ikl7p@chatbot-ai-fb576.iam.gserviceaccount.com',
  // privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjEEAOwLASzAqe\ni5ace2znFPHfda5eUudNMgPfZl/aX8VfW6ndnNNNAu0nfaLhe9vLNAQDDwikOViC\nBga4j4f2vmHh8xNpFoJSybzh6pTkpfVxvGpdf8DqBScQiEAiePDJkVB7tMujxBHE\np0OygbO/MGP/IRugSCQQNIgnc3DUiCIYma63WvykGV+9kdFsZ7nNfJU866E2UgpH\nkNBTG+SCUI4PwhavhT3JSrVK/wD7HnS9Qqv8PxjObuZ4llI5/T41CK9vw9g8c0cG\nu3WorV51yLf+TnEBL6LDpu4JroUEnbt3+fV2hlnb1M1bf6KInFKt0u6VSi6imsn+\noDDxOEWbAgMBAAECggEAGuzUfvsfN8NcX4iSEn2o4lFJjQnsBGQxEESZchp/6lmV\nCCVlG5RJKba5fSNYMV5X0SpiHTUuypsze6jOFEyS+VG/bOVLx7bxRwVLvIwVENo8\neI7Ri2XMb3fxVuAAoxCQReBKR1r3oy99dZje60tSaFfvsxF+88zls41RDB6aO2WJ\nhmEFcQzikglkD1z1VIqcnAix2Y7rJS0rjK/WsCFor0YfOMB3JvnTptPUwC+QwhnG\nq98HbrDEw7HEB5+DABOLihio9v7Z5GDzzc2xCsdQb0PVFcqNyGlDbzEXJPt+5y2z\nzaTRr70bp02Xe4k2PsoyaimIjohWU9ZG6dIdhIY89QKBgQDatc856Tnw0TmW1e7v\nuBC13Cmw7dgJIHVBIKQQQOjLZpx0ZYqnY79LrQ39LzKclsS28kIhjZwY586H9tT1\n7m4FI3QlQIIQhhxUtuV4L2Ne5o8ztsNaxs4Ve/WH+L+54r1K6gD4s5Ac2RH/ZwKL\naufp0d3HwlKtqpBEKzEXFSpivwKBgQC+3ZdZtHEuGqAlboCNJNccxE9VkhzvAmW9\nhzjABkY9myVwbbLRbMxgmEfxQC/GX610p7OjRDQuaSCeQJGML5WeilSnVnLPpMQ2\nS365fELod//Yb1eewEzPBdgd2kVYCe8JRgGdPBy67Nlgw9KIBGS9uwpp7KwW/ri8\nZj8I2+gAJQKBgQDPSXWoa3Xw2jv8y7J0HT4pPwt8l1AkBlFbcrZMeViqPwyV/Q9W\n6uEJtnEFv8/2PacfxagL6Q1DRaCnmLfqhxpbYGjaTbN4OcNsPxRpvnAuJ9MdrmCl\nDruP/TaOsqH0agQClpppHLa/wLSgHl95B8/Z+oB6raBy3K9zDISwXe0YPQKBgHkl\nsbGQpN48rDXWI+Zy4c8yk6Ce85qJjQZ11AGeeesUlPj9yCjBxB/zyIZK1Yg2pqSK\n5azV18E1nSyVk0zFz1QoPX9RkeJWlOxZkwAs7VMdB9nbImRzbs1gykJ4jtdIxt69\n/rxMsXe8amXPJcyL7V24YO3G+ZxG5f8/bvcyjdm5AoGALjSmrLpmAClrHsEhBGTO\nKeqG0lHBTa+HGUc4qXrrHAku6QiUgFpppCIMsKU3Z79pe/mw9oqF+EgtJ8U17qDY\nZmzpYvk29MUmmXv5qJkavu4AnJdayGf3n8byckjC2z+BVDa4ik15cFf2zlafGsRD\nHbKI7dIm3pnZhIKTVzxFjFY=\n-----END PRIVATE KEY-----\n`,
};

// const processedPrivateKey = process.env.FIREBASE_PRIVATE_KEY.replace(
//   /\\n/g,
//   '\n'
// );
// console.log('Processed Private Key:', processedPrivateKey);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log('Firebase Admin initialized');
}

const adminDb = admin.firestore();

export { adminDb };
