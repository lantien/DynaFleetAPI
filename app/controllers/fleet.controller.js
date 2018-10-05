const fleetModel = require('../models/fleet.model.js');
const callbackRequest = require('../callbackRequest.js');
const proxy = require('../../config/proxy.js');

module.exports = function(client) {

  var myClient = client;
  var methods = {};

  methods.getDrivers = (req, res) => {

      if(req.headers.token == undefined) {

        return res.status(400).send({
          message: "No Api_SessionId_1 provided in header token."
        });
      }

      var query = fleetModel.getDrivers(req.headers);

      myClient.getDrivers(query,
        (err, result) => {
            callbackRequest(err, result, res);
        },
      proxy);
  };

  return methods;

};
