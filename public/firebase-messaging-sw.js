importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope)
    }).catch(function (err) {
      console.log('Service worker registration failed, error:', err)
    })
}

firebase.initializeApp({
  messagingSenderId: '153862338959'
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
