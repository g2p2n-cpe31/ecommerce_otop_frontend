const config = {
  apiKey: 'AIzaSyC25PZBkyUKwZUX2lZdMLlPELqO4dy0bCM',
  authDomain: 'otop-g2p2n.firebaseapp.com',
  databaseURL: 'https://otop-g2p2n.firebaseio.com',
  projectId: 'otop-g2p2n',
  storageBucket: 'otop-g2p2n.appspot.com',
  messagingSenderId: '520022753494',
  appId: '1:520022753494:web:27b02ac1cb716239eb8977',
  measurementId: 'G-YGFS9ZYQRG',
}

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(config)
  firebaseInstance = firebase

  return firebase
}
