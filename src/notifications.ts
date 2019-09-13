import firebase from 'firebase'


export const askForPermissioToReceiveNotifications = () => {

  const messaging = firebase.messaging()
  messaging.usePublicVapidKey("BHjJ-ZerJb5G4_SuhJR7fXT02U7PtC7q4YkXZBEhWs4penmLn7DgqlxKQJlIqZktQQzBrV-A6YGhORiAzluu8Tw")

  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      debugger
      messaging.getToken().then(token => {
        debugger
        console.log(token)
      }).catch(() => {
        console.log('ssssssssssssssssssssssssssssss')
      })

    } else {
      console.log('Unable to get permission to notify.');
    }
  })
}

const s = firebase.initializeApp({
    apiKey: "AIzaSyAZ4QnplsUIAHZR0SxP7GiobHXpB3_sXUY",
    authDomain: "megalodon-a76cd.firebaseapp.com",
    databaseURL: "https://megalodon-a76cd.firebaseio.com",
    projectId: "megalodon-a76cd",
    storageBucket: "",
    messagingSenderId: "680495446953",
    appId: "1:680495446953:web:895c9dcabc82d19f27a2b8"
})

console.log(s)

export function f() {
    // navigator.serviceWorker.register('./firebase-messaging-sw.js')
}
