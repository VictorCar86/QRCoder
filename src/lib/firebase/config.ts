// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAzNOrIVImWOKlp94pocS3xpXiy4PmKGi0",
  authDomain: "qrcode-coder.firebaseapp.com",
  projectId: "qrcode-coder",
  storageBucket: "qrcode-coder.firebasestorage.app",
  messagingSenderId: "400250203077",
  appId: "1:400250203077:web:aab74d8dc294b4420f39ac",
  measurementId: "G-FS0N7F2RZK"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

