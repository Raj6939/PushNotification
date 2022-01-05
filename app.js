// importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");
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
  function subscribe(){
      console.log("Working");
      Notification.requestPermission().then(permission=>{
          console.log(permission);
          if(permission =="granted"){
            messaging.getToken({vapidKey:"BHZeQQQfY8Nd3S6IbfCMFRETPsApwhd_csxmj8NS_OXU1Bc5f1jA_A8l7O_aLP4yHAov-7mz8eSjZtcWqPMiIbQ"}).then(currentToken=>{
                console.log(currentToken);
                document.getElementById("token").innerHTML=
                currentToken;
            })
          }
      })

  }
messaging.onMessage(res=>{
    console.log(res);
})

  function sendNotification(){
      const token =document.getElementById('token').value
      const title = document.getElementById('title').value
      const msg =document.getElementById('msg').value
      
      let body={
          to:token,
          notification:{
              title:title,
              body:msg,
              icon:'unknown.png'
          },
        }
      let options={
          method:"POST",
          headers: new Headers({
              Authorization: 
              "key=AAAAYAnpTEs:APA91bHcD8QWjhjvERc88fNXy5_rXq8CdN9MPA0LvZ58XeyDTL4-k3a-QlEr5hq4pZ3Pw1RwTJH-4nwKyD9u17FySLVESWDOVx_qW5keCwgv1tWOahgmrwRevBcJV6vzPRlLLLlOwIgc",
              "Content-Type": "application/json"
          }),
          body:JSON.stringify(body)
      }
      fetch("https://fcm.googleapis.com/fcm/send",options).then(res=>{
        // console.log("SENT");    
      console.log(res);
          
      }).catch(e =>console.log(e))
    // console.log(body);
    }
    