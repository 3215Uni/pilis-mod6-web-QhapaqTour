// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSz9rAzyBXVI68jcqvYAo91uqjSFi_eY8',
  authDomain: 'react-firebase-crud-bbe33.firebaseapp.com',
  projectId: 'react-firebase-crud-bbe33',
  storageBucket: 'react-firebase-crud-bbe33.appspot.com',
  messagingSenderId: '940495908900',
  appId: '1:940495908900:web:be95285ba2594423f168b1',
  measurementId: 'G-ZJRLGYS21L'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

export const uploadFile = async (file) => {
  const storageRef = ref(storage, uuidv4())
  const response = await uploadBytes(storageRef, file)
  return response
}
