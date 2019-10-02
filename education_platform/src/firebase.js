import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_APP_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.projectId,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
}

firebase.initializeApp(config)
export default firebase
