// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1l6y0pSz2JGj6CeLXrsmXsUwWnvBDaTw",
  authDomain: "onboarding-project-d9947.firebaseapp.com",
  projectId: "onboarding-project-d9947",
  storageBucket: "onboarding-project-d9947.appspot.com",
  messagingSenderId: "199126733843",
  appId: "1:199126733843:web:ad8b95fd3d8c4615061be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
