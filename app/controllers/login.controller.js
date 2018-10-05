const loginModel = require('../models/login.model.js');
const callbackRequest = require('../callbackRequest.js');
const proxy = require('../../config/proxy.js');


module.exports = function(client) {

  var myClient = client;
  var methods = {};

  methods.login = (req, res) => {

    if(req.body.gmtOffset == undefined || !req.body.username == undefined ||
       req.body.password == undefined) {

         return res.status(400).send({
           message: "To log a user the server need a gmtOffset an username and a password"
         });
    }

    var query = loginModel.loginBody(req.body);

    myClient.login(query,
      (err, result) => {
          callbackRequest(err, result, res);
      }
    , proxy);
  }

  methods.logout = (req, res) => {

    if(req.headers.token == undefined) {

      return res.status(400).send({
        message: "To logout the server need a token"
      });
    }

    var query = loginModel.logoutBody(req.headers);
    
    myClient.logout(query,
      (err, result) => {
          callbackRequest(err, result, res);
      }
    , proxy);
  }

  return methods;
}
