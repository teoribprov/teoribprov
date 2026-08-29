const firebaseConfig = {
  apiKey: "AIzaSyDjpihYJAAXb9Ms5B9Pho84xd2wB_sxSVs",
  authDomain: "teoribprov-67be0.firebaseapp.com",
  databaseURL: "https://teoribprov-67be0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "teoribprov-67be0",
  storageBucket: "teoribprov-67be0.firebasestorage.app",
  messagingSenderId: "586858590685",
  appId: "1:586858590685:web:c207107de246bb3ac78634",
  measurementId: "G-8XNGZRTSXP"
};

// Inicializo Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log('🔥 Firebase u inicializua!');
} catch(e) {
    console.log('⚠️ Firebase ishte inicializuar tashmë');
}

// Përcakto database në mënyrë të sigurt
let database;
try {
    database = firebase.database();
} catch(e) {
    console.log('⚠️ Gabim në marrjen e database:', e);
}

console.log('🔥 Firebase gati!');