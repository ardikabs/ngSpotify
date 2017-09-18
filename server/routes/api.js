
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');

var client_id ='ca8d5e60f7874a76b8497953bf16a0a7';
var client_secret ='f3e4b0d819444de69a4789ff29293c46';
var options = {
    url:'https://accounts.spotify.com/api/token',
    headers:{
        'Authorization': 'Basic '+ (new Buffer(client_id + ':' + client_secret.toString('base64'))),
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    form: {
        grant_type: 'client_credentials'
      },
    json: true
}

request.post(options, function(error, response, body){
    if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        console.log(token);
    }
});

router.get('/',function(req,res){
    res.send('API Works');
});



router.get('/getToken',function(req,res){
    res.send('Get Spotify Access Token');
});

module.exports = router;