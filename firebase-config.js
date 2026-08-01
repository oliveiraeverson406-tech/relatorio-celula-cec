import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5bcxF6RtSAvy4d_P-ukTLARA8ED1EKCk",
  authDomain: "relatorio-celula-cec.firebaseapp.com",
  projectId: "relatorio-celula-cec",
  storageBucket: "relatorio-celula-cec.firebasestorage.app",
  messagingSenderId: "342653178907",
  appId: "1:342653178907:web:ae19b27842490632ec94be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
