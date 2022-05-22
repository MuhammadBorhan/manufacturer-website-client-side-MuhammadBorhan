// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXah1360E9TgJ8FVxe0GC6_KW36X1DQA8",
    authDomain: "full-stack-project-d1710.firebaseapp.com",
    projectId: "full-stack-project-d1710",
    storageBucket: "full-stack-project-d1710.appspot.com",
    messagingSenderId: "213979402384",
    appId: "1:213979402384:web:9ec0cc63ae59fa662e8815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;