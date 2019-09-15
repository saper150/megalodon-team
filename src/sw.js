
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js')

firebase.initializeApp({
  'messagingSenderId': '680495446953'
})

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('fetch', event => {
	event.respondWith(fetch(event.request))
})
