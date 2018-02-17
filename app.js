//Variables
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({origin: '*'}));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const user = require('./domains/user.js');
const auth = require('./auth.js')


//Starts up the actual application server
app.listen(3001, 'localhost', function () {
  console.log('Running app on port 3001!'); //this needs changing 
});


//user Gets
app.get('/user', user.getAll);

//login
app.post('/auth/login', auth.login);
//auth
app.get('/auth',auth.getUserDetails);