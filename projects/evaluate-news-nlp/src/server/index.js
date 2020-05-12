const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const app = express()
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

app.use(express.static('dist'))
console.log('fdaslkj------------------------------------------------------------')
console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);

const bodyParser = require("body-parser");
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

const cors= require("cors");
        app.use(cors());

app.get('/test', function (req, res) {
    console.log("test")
    res.send(mockAPIResponse)
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/send,', (req, res) => {
    console.log("post data ")
    url = req.body
})


app.get('/analyseText', function (req, res) {
    textapi.sentiment({
        "text": url,
        "mode": "document"
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
        else {
            console.log('ERROR '+error);
            res.send({text:"invalid"});
        }
    });

})
