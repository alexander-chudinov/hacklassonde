const cust_id = "A6K3eXF09"

const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyA0kNyJpC-3VSPQRhcXFmre3Vwq7Pijiww",
    authDomain: "bigsad-ff378.firebaseapp.com",
    databaseURL: "https://bigsad-ff378.firebaseio.com",
    storageBucket: "bigsad-ff378.appspot.com",
}

firebase.initializeApp(config)
const database = firebase.database() //db ref

database.ref('data/'+cust_id+'/user').once('value').then(function(snapshot){
    console.log(snapshot.val())
    process.exit()
})
