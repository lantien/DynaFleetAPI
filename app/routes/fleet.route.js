module.exports = (app, client) => {

  const fleetController = require('../controllers/fleet.controller.js')(client);

  //Get all drivers
  app.get('/getDrivers', fleetController.getDrivers);

};
