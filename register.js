import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { auth} from "./config.js";
const db = getFirestore(app);

const form = document.querySelector("#form");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(async (userCredential) => {
      const user = userCredential.user;
      email.value = ''
      password.value = ''
      fullname.value = ''
    }
  );

  try {
    const docRef = await addDoc(collection(db, "users"), {
      fullname: fullname.value,
      email: email.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
