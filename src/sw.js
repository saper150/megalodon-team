
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js')

firebase.initializeApp({
  'messagingSenderId': '680495446953'
})


const messaging = firebase.messaging();

const levels = [
      'Czyste powietrze',
      'Niskie zanieczyszczenie',
      'Przeciętne zanieczyszczenie',
      'Zanieczyszczone powietrze',
      'Duże zanieczyszczenie powietrza',
]


function mapAqiToInfo(aqi) {
  return levels[Math.max(Math.ceil(aqi / 20) - 1, 0)]
}

messaging.setBackgroundMessageHandler(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const data = JSON.parse(payload.data.notification)
    console.log(data)
    // Customize notification here
    const notificationTitle = 'Stan powietrza na jutro: ' + levels[Math.max(Math.ceil(data.agi / 20) - 1, 0)];
    const notificationOptions = {
      body: levels[Math.max(Math.ceil(payload.aqi / 20) - 1, 0)],
      icon: '/cloud.svg'
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('fetch', event => {
	event.respondWith(fetch(event.request))
})
