import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, debugErrorMap, getAuth, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  GoogleAuthProvider,
  getReactNativePersistence,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import * as firebaseAuthStar from 'firebase/auth';
// const getReactNativePersistence = (firebaseAuthStar as any).getReactNativePersistence;
// const GoogleAuthProvider = (firebaseAuthStar as any).GoogleAuthProvider;

// const firebaseConfig = {
//   apiKey: "AIzaSyD3NHvxq-knrpm9159BpEHiLHByw-lWGlw",
//   authDomain: "react-native-template-16ff6.firebaseapp.com",
//   projectId: "react-native-template-16ff6",
//   storageBucket: "react-native-template-16ff6.appspot.com",
//   messagingSenderId: "220973491456",
//   appId: "1:220973491456:web:2e595fb8721f844f477fe5",
//   measurementId: "G-JDV1Z1SY2K",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAucv2x_aXSk5XkgcsZgzPeSUOHHHk3imo",
  authDomain: "bingenow-rn.firebaseapp.com",
  projectId: "bingenow-rn",
  storageBucket: "bingenow-rn.appspot.com",
  messagingSenderId: "52416034390",
  appId: "1:52416034390:web:43a638ff5add6c97722df7",
  measurementId: "G-0R7HLVENF3"
};

//* Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp).is;

//* Auth
// ! (errorMap: debugErrorMap) is used to get descriptive error messages otherwise first one also works
// ! persistence:getReactNativePersistence(AsyncStorage) is used to user from storage
// export const firebaseAuth:Auth = getAuth(firebaseApp);
export const firebaseAuth: Auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
  errorMap: debugErrorMap,
});

export const googleProvider = new GoogleAuthProvider();

export const firebaseDb = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
