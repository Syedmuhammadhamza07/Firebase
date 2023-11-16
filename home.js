import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.location = "index.html";
  }
});

const logout = document.querySelector("#logout-btn");

logout.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        alert("Logout Successfully")
        window.location = 'index.html'
      }).catch((error) => {
        console.log(error);
      });
})