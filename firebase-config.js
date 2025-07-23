import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js';
import { getDatabase, ref, push, update, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8lqLFl0agRrisPtjsmoWxr0nbTagiaqQ",
  authDomain: "d2d-cdc.firebaseapp.com",
  databaseURL: "https://d2d-cdc-default-rtdb.firebaseio.com",
  projectId: "d2d-cdc",
  storageBucket: "d2d-cdc.firebasestorage.app",
  messagingSenderId: "809375112221",
  appId: "1:809375112221:web:c80428315e9d084bd53af4",
  measurementId: "G-V876KE79ZC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar o objeto database e funções para uso em outros scripts
export { database, ref, push, update, onValue, remove };
