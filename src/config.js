import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'
import firebase from 'firebase/firestore'

const config = {
  firebase_config: {
    apiKey: 'AIzaSyAcDtk6LLyla6erULIPCMhEhg70uCbxVMc',
    authDomain: 'wingman-1745a.firebaseapp.com',
    databaseURL: 'https://wingman-1745a.firebaseio.com',
    projectId: 'wingman-1745a',
    storageBucket: 'wingman-1745a.appspot.com',
    messagingSenderId: '1005911641189'
  },
  firebase_config_dev: {
    apiKey: 'AIzaSyAcDtk6LLyla6erULIPCMhEhg70uCbxVMc',
    authDomain: 'wingman-1745a.firebaseapp.com',
    databaseURL: 'https://wingman-1745a.firebaseio.com',
    projectId: 'wingman-1745a',
    storageBucket: 'wingman-1745a.appspot.com',
    messagingSenderId: '1005911641189'
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone'
  ],
  initial_state: {
    theme: 'dark',
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),

}

export default config
