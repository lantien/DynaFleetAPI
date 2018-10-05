const tokenModel = require('../models/token.model.js');

exports.getDrivers = (tokenObj) => {

  return tokenModel( tokenObj.token, 'getDrivers');
};
