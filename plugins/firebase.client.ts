import { initializeApp, getApps } from 'firebase/app'
import { getMessaging, onMessage, type Messaging } from 'firebase/messaging'

declare module '#app' {
  interface NuxtApp {
    $messaging: Messaging
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $messaging: Messaging
  }
}

export default defineNuxtPlugin(() => {
  const app = getApps()[0] ?? initializeApp({
    apiKey: "AIzaSyDqnfdP5RU-5YE1sccEsAXFwGaLpvag3iA",
    authDomain: "testingpush-e9daf.firebaseapp.com",
    projectId: "testingpush-e9daf",
    storageBucket: "testingpush-e9daf.appspot.com",
    messagingSenderId: "836777612459",
    appId: "1:836777612459:web:2c4920c93dab5d408c13ee"
  })

  const messaging = getMessaging(app)


  // This runs whenever a message is received:
  //   - When the page is open
  //   - When the user clicked the bg notification
  onMessage(messaging, (payload) => {
    alert(JSON.stringify(payload, null, 2))
  })

  return {
    provide: {
      messaging,
    }
  }
})
