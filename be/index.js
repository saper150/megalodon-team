var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://megalodon-a76cd.firebaseio.com"
})

admin.firestore().collection('abc').add({ 'o kurde': 223 })