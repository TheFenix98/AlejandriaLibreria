import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5sx7xbSyWVPMtSISjBemMw2fF_heAPug",
  authDomain: "e-commerce-libros-df282.firebaseapp.com",
  projectId: "e-commerce-libros-df282",
  storageBucket: "e-commerce-libros-df282.appspot.com",
  messagingSenderId: "49425932807",
  appId: "1:49425932807:web:8ae649762e81f9be02c0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
