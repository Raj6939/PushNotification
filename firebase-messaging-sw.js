importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDjGhW6K1J6hrWdbBV_CpmrWj_Mmvk_6GM",
  authDomain: "my-web-push-1dc51.firebaseapp.com",
  databaseURL: "https://my-web-push-1dc51-default-rtdb.firebaseio.com",
  projectId: "my-web-push-1dc51",
  storageBucket: "my-web-push-1dc51.appspot.com",
  messagingSenderId: "412483144779",
  appId: "1:412483144779:web:2ec1e879e2ab666c7751ce",
  measurementId: "G-PFPSSDG7G1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
