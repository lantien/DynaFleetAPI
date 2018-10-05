const model = require('../models/model.js');
const callbackRequest = require('../callbackRequest.js');
const proxy = require('../../config/proxy.js');

module.exports = (client) => {

    var methods = {};

    methods.requestSoap = (req, res) => {

      if(req.body == undefined ||  req.headers.xmlname == undefined) {

          return res.status(400).send({
            message: "You need to provide a body, an xmlName in header."
          });
      }

      if(client[req.params.funcName] == undefined) {
        return res.status(400).send({
          message: "Invalid xmlName."
        });
      }

      var query = model(req.body,  req.headers.xmlname, req.params.funcName);
      
      client[req.params.funcName](query,
        (err, result) => {
            callbackRequest(err, result, res);
        }
      , proxy);
    };

    return methods;
};
