// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

// Initialize app
const app = firebase.initializeApp({
  apiKey: "AIzaSyDqnfdP5RU-5YE1sccEsAXFwGaLpvag3iA",
  authDomain: "testingpush-e9daf.firebaseapp.com",
  projectId: "testingpush-e9daf",
  storageBucket: "testingpush-e9daf.appspot.com",
  messagingSenderId: "836777612459",
  appId: "1:836777612459:web:2c4920c93dab5d408c13ee"
})

// Initialize messaging
const messaging = firebase.messaging()

// Listen to bg messages
messaging.onBackgroundMessage(payload => {
  console.log("Received a bg message: ", payload);


  const title = payload.notification.title
  const notification = {
    body: "Notification Body",
    icon: "/icon.png"
  }

  // Show notification when message received
  self.registration.showNotification(title, notification);
})

