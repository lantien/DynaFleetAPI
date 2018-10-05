module.exports = (token, route) => {

  var strBody = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://wirelesscar.com/dynafleet/api/types">'+
                 '<soapenv:Header/>'+
                 '<soapenv:Body>'+
                    '<typ:'+ route +'>'+
                       '<Api_SessionId_1>'+
                          '<id>'+ token +'</id>'+
                       '</Api_SessionId_1>'+
                    '</typ:'+ route +'>'+
                 '</soapenv:Body>'+
              '</soapenv:Envelope>';

  return { _xml: strBody};

};
