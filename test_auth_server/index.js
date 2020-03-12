const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let credentials = {
    username:'',
    password: ''
};

let response = {
    error: false,
    code: 200,
    message: ''
};

app.post('/signup', function(req, res) {
    console.log("SIGNUP -> ", req.body);
    if(!req.body.username || !req.body.password) {
        response = {
            error: true,
            code: 502,
            message: 'username and password are required'
        };
    } else if (credentials.username !== '' && credentials.password != ''){
        response = {
            error: true,
            code: 503,
            message: 'user exist'
        };
    } else {
        credentials.username = req.body.username;
        credentials.password = req.body.password;

        response = {
            error: false,
            code: 200,
            message: 'user created successfully'
        };
    }
    res.send(response);
});

app.post('/signin', function(req, res) {
    console.log("SIGNIN -> ", req.body);
    if(!req.body.username || !req.body.password) {
        response = {
            error: true,
            code: 502,
            message: 'username and password are required'
        };
    } else if(req.body.username != credentials.username || req.body.password != credentials.password){
        response = {
            error: true,
            code: 503,
            message: 'username or password incorrect'
        };
    } else {
        response = {
            error: false,
            code: 200,
            message: 'signin successfully'
        };
    }
    res.send(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});