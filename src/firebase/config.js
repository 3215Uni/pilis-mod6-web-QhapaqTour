import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
  apiKey: 'AIzaSyA25oW7SjFjkiXCZBqhsXFlBX-L8HjXQyo',
  authDomain: 'qhapaqtour-be7e8.firebaseapp.com',
  projectId: 'qhapaqtour-be7e8',
  storageBucket: 'qhapaqtour-be7e8.appspot.com',
  messagingSenderId: '153862338959',
  appId: '1:153862338959:web:1deaf64ed872fdcbe5f3fa',
  measurementId: 'G-TZ0BED8FBK'
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const messaging = getMessaging(app)

// Storage
export const uploadFile = async (file) => {
  const storageRef = ref(storage, uuidv4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}

// Cloud Messaging
export const requestPermission = () => {
  console.log('Requesting permission...')
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
      return getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Client token: ', currentToken)
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log(
              'No registration token available. Request permission to generate one.'
            )
            // ...
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err)
          // ...
        })
    }
  })
}
// requestPermission()

export const onMessageListener = () =>
  new Promise(resolve => {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
      resolve(payload)
    })
  })
