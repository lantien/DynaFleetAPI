const tokenModel = require('../models/token.model.js');

exports.loginBody = (loginObj) => {

    var strBody =  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://wirelesscar.com/dynafleet/api/types">'+
    '<soapenv:Header/>'+
    '<soapenv:Body>'+
        '<typ:login>'+
            '<Api_LoginLoginTO_1>'+
                '<gmtOffset>'+
                    '<value>'+ loginObj.gmtOffset +'</value>'+
                '</gmtOffset>'+
                '<password>'+  loginObj.password +'</password>'+
                '<username>'+  loginObj.username +'</username>'+
            '</Api_LoginLoginTO_1>'+
        '</typ:login>'+
   ' </soapenv:Body>'+
    '</soapenv:Envelope>';

    return { _xml: strBody};

};

exports.logoutBody = (logoutObj) => {

  return tokenModel( logoutObj.token, 'logout');
};
