import firebase from 'firebase/app'
import 'firebase/auth'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
// export const init = () => {
//     let config = {
//         apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//         authDomain: 'xxxxxxxxxxxxx'
//     };
//     firebase.initializeApp(config);
// };

// export const firebaseAuth = firebase.auth;
