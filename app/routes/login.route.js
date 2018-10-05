module.exports = (app, client) => {

    const loginController = require('../controllers/login.controller.js')(client);

    //Log a user
    app.post('/login', loginController.login);

    //Logout a user
    app.post('/logout', loginController.logout);
};
