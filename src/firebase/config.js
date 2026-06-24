import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyD6J5Ecdep0q9Vn4w1P0mCfTD_tHvQRQfs",
  authDomain: "mercatto-db-96fbb.firebaseapp.com",
  projectId: "mercatto-db-96fbb",
  storageBucket: "mercatto-db-96fbb.firebasestorage.app",
  messagingSenderId: "72456048632",
  appId: "1:72456048632:web:85197d71b79300968a500d",
  measurementId: "G-JLQL0RJY4Q"
}


export const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)