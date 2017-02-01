import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDH7LMa2_45hIOs0curCKmmskU0eoGqa3w',
  authDomain: 'rhys-test-project.firebaseapp.com',
  databaseURL: 'https://rhys-test-project.firebaseio.com',
  storageBucket: 'rhys-test-project.appspot.com',
  messagingSenderId: '710168940518',
}

firebase.initializeApp(config)

export const ducksExpirationLength = 100000
export const repliesExpirationLength = 300000
export const userExpirationLength = 100000

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
