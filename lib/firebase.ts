import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyAlN-1poVoH5Kv1XzvD9CeUJIEfqJFsndA",

  authDomain: "goglobal-61c1b.firebaseapp.com",

  projectId: "goglobal-61c1b",

  storageBucket: "goglobal-61c1b.firebasestorage.app",

  messagingSenderId: "205293787081",

  appId: "1:205293787081:web:b957400ea886d9dd657a18",

}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)