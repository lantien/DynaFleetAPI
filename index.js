const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const soap = require('soap');

const wsdlPath = './config/wsdl.xml';

// create express app
const app = express();

//set helmet security
app.use(helmet());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to plateform DynaFleetApiRest."});
});

app.listen(8080, () => {

  soap.createClientAsync(wsdlPath)
  .then((client) => {

    // REQUIRE ALL ROUTE
    require('./app/routes/login.route.js') (app, client);
    require('./app/routes/fleet.route.js') (app, client);
    ///////////////////////////////////////////////////

    console.log('WSDL loaded successfully');
    console.log("Server is listening on port 8080");
  })
  .catch(err => {

    console.log(err);
  })
});
