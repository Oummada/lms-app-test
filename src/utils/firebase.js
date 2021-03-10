
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDFqP718M61_a5oCahQGi4rBGtkaiuUjVI",
    authDomain: "lms-project-4b9ec.firebaseapp.com",
    projectId: "lms-project-4b9ec",
    storageBucket: "lms-project-4b9ec.appspot.com",
    messagingSenderId: "982165786739",
    appId: "1:982165786739:web:a75e4dc3ce046d3b0d9a06",
    measurementId: "G-HNGBSB33SK"
  };

  // Initialize Firebase
const app  = firebase.initializeApp(firebaseConfig);
  
// exporter notre base de donnees

export default fireDB;

// export the auth app 

export const auth = app.auth(); 