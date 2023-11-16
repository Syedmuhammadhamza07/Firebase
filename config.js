import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm9msXFDnZvAJe_Vw1l2xxDkX-9L4OQUI",
  authDomain: "my-olx-bad77.firebaseapp.com",
  projectId: "my-olx-bad77",
  storageBucket: "my-olx-bad77.appspot.com",
  messagingSenderId: "666503542444",
  appId: "1:666503542444:web:7a0b056b6a69a722f39109"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);