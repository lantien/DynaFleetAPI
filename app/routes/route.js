module.exports = (app, client) => {

  const controller = require('../controllers/controller.js')(client);

  //Forward all request
  app.post('/dynafleet/:funcName', controller.requestSoap);

};
