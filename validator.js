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
var fs = require('fs')
var filename = "userkey.txt"
const CryptoJS = require('crypto-js')
database.ref('data/'+cust_id+'/user').once('value').then(function(snapshot){
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        var bytes  = CryptoJS.AES.decrypt(data, 'vpn')
        var dataIn = bytes.toString(CryptoJS.enc.Utf8)
        if(dataIn==JSON.stringify(snapshot.val())){
            console.log(1)
        } else {
            console.log(dataIn)
            console.log(JSON.stringify(snapshot.val()))
            console.log(0)
        }
        process.exit()
    })
})
