const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


var admin = require("firebase-admin");
var serviceAccount = require("./keydegon.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://degon-vf2.firebaseio.com"
});

const db = admin.database()

exports.createUserone = functions.auth.user().onCreate((user) => {
    const{uid, email, displayName, photoURL} = user
    const newUser = {
        email,displayName, photoURL, createAt: new Date()
    }
    db.ref('users').child(uid).set(newUser);
});

exports.deleteUserone = functions.auth.user().onDelete((user)=>{
    const{uid} =user
    db.ref('users').child(uid).remove()
})