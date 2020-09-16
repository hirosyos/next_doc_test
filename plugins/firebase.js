import firebase from "firebase";

// firebaseのAPIキーは本当は.env.localから読みたいのだがうまくいっていない
const firebaseConfig = {
    apiKey: "AIzaSyBRQ8o4qDOtf-z3zuz54muAvn3NiovFBzI",
    authDomain: "next-doc-test.firebaseapp.com",
    databaseURL: "https://next-doc-test.firebaseio.com",
    projectId: "next-doc-test",
    storageBucket: "next-doc-test.appspot.com",
    messagingSenderId: "874511559326",
    appId: "1:874511559326:web:de4521a70605dd9224a98f",
};
// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_APIKEY,
//     authDomain: process.env.FIREBASE_AUTHDOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASEURL,
//     projectId: process.env.FIREBASE_PROJECTID,
//     storageBucket: process.env.FIREBASE_STRAGEBUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.FIREBASE_APPID,
// };

console.log({ firebaseConfig });

// firebaseの２重起動抑止
if (firebase.apps.length === 0) {
    // const firebaseApp = firebase.initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
