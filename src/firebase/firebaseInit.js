import { getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPDhLubxVgDpHBuo5KGgX_wbEse-crAJI",
  authDomain: "todoproject-d56c8.firebaseapp.com",
  databaseURL: "https://todoproject-d56c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoproject-d56c8",
  storageBucket: "todoproject-d56c8.appspot.com",
  messagingSenderId: "625888359993",
  appId: "1:625888359993:web:b141d7dfdf18acb5c8ffe8"

}


export const initMyFirebase = () => {
  if (!getApps().length) {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)


    // if (typeof window !== 'undefined') {
    //   if ('measurmentId' in firebaseConfig) {
    //     const analytics = getAnalytics(app)
    //     const performanse = getPerformanse(app);
    //   }
    // }

    console.log('initialized firebase')
  } else {
    console.log('firebase is already initialized')
  }
}

// export const database = getDatabase(app)