const quit = (err) => {
    console.log(err)
    process.exit()
}
const express = require('express')
const pug = require('pug')
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.render('main')
})

const exec = require('child_process').exec

const server = app.listen(5000, function(err){
    if(err){quit(err)}
    exec("open http://127.0.0.1:5000", function(err, stdout, stderr) {
        if(err){quit(err)}
    });
})

var whois = require('whois')
const getIP = require('external-ip')();

const cust_id = "A6K3eXF09"
var user = {
    'organization' : 'unknown',
    'city' : 'nowhere',
    'address' : '123 sesame street',
    'usr_id' : 'H6L23cEf',
    'email' : 'nobody@nowhere.ca'
}

const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyA0kNyJpC-3VSPQRhcXFmre3Vwq7Pijiww",
    authDomain: "bigsad-ff378.firebaseapp.com",
    databaseURL: "https://bigsad-ff378.firebaseio.com",
    storageBucket: "bigsad-ff378.appspot.com",
}

firebase.initializeApp(config)
const database = firebase.database() //db ref

app.post('/download', function(req,res){
    user.email = req.body.email
    doDownloadActions()
    res.send('Thank you for downloading Transcore software.')
})

app.get('/api', function(req,res){
    res.send(user)
})

function doDownloadActions(){
    getIP((err, ip) => {
        if (err) {
            throw err
        }
        whois.lookup(ip, function(err, data) {
            var u = data.split('\n')
            user.organization = u[25].split(':')[1].trim()
            user.address = u[27].split(':')[1].trim()
            user.city = u[28].split(':')[1].trim()
            database.ref('data/' + cust_id).set({user})
            console.log(user)
            //begin the file download on the user end
            //rsa encoding?
        })
    })
}
