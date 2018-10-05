const js2xmlparser = require("js2xmlparser");

module.exports = (objJson, xmlName, route) => {

  var xmlContent = js2xmlparser.parse(xmlName, objJson).substring(22);

  var strBody = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://wirelesscar.com/dynafleet/api/types">'+
                 '<soapenv:Header/>'+
                 '<soapenv:Body>'+
                    '<typ:'+ route +'>'+
                       xmlContent +
                    '</typ:'+ route +'>'+
                 '</soapenv:Body>'+
              '</soapenv:Envelope>';

  return { _xml: strBody};
};
