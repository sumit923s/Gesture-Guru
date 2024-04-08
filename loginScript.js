  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import {getDatabase, ref ,set, get, child} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js"
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC71_ayw87MUMrTZsCdnK08HqcIsb2w8XI",
    authDomain: "college-project-85eff.firebaseapp.com",
    projectId: "college-project-85eff",
    storageBucket: "college-project-85eff.appspot.com",
    messagingSenderId: "512286739750",
    appId: "1:512286739750:web:7dd7294c49881e6b3045e7",
    measurementId: "G-V2VK0QW12F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  //get ref to dartabase service
  const db = getDatabase(app);
  document.getElementById("login-btn").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
      username: document.getElementById("username").value,
    
    })
  });