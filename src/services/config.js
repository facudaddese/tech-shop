//Se usa para iniciar la conexion con firebase
import { initializeApp } from "firebase/app";
//Se usa para obtener una instacia de Firestore (almacenamiento)
import { getFirestore } from "firebase/firestore"

//Objeto con informacion de la cuenta y conexion
const firebaseConfig = {
    apiKey: "AIzaSyBPdrYqGMRnq4NpT6V23e6jtIhzf2o7-3o",
    authDomain: "techshop-2026.firebaseapp.com",
    projectId: "techshop-2026",
    storageBucket: "techshop-2026.firebasestorage.app",
    messagingSenderId: "25157301834",
    appId: "1:25157301834:web:b5ce2d64ce4abe7e2e98b3"
};

const app = initializeApp(firebaseConfig);

//Obtengo el servicio de Firestore
export const db = getFirestore(app);