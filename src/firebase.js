import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9Bp6TRO0ueKjNIb-alZcezQ1ZrEr3T-Q",
    authDomain: "instagram-clone-aece7.firebaseapp.com",
    projectId: "instagram-clone-aece7",
    storageBucket: "instagram-clone-aece7.appspot.com",
    messagingSenderId: "1028992694044",
    appId: "1:1028992694044:web:2deac51c0376fb9afd2cd9",
    measurementId: "G-YMN67YN9QX"

})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
// export default firebase;
