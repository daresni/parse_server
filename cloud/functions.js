
var request = require('request');
const https = require('https');
var rp = require('request-promise');
Parse.Cloud.define('hello', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
});

Parse.Cloud.define('post_fatora', async (req) =>{
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  var post_options = {
      "lang": "en",
      "callbackURL": "a",
      "terminalId": "14740012",
      "amount": req.params.amount};

    return rp({
      'url': "https://egate-t.fatora.me/api/create-payment",
      'method': "POST",
      'headers': {
        'Content-Type': 'application/json',
        'Authorization':'Basic c3R1ZHlsb29wOnN0dWR5bG9vcEAxMjM='
      },
      'json': true,
      'body': post_options,
    })
  .then(response => {
    return response;
  });
});
















































  // return await Parse.Cloud.httpRequest( {
  //   url: 'https://egate-t.fatora.me/api/create-payment',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //     'Authorization': token
  //   },
  //   body:
  //     {
  //       "lang": "en",
  //       "callbackURL": "a",
  //       "terminalId": "14740012",
  //       "amount": req.params['amount']
  //      }
    
  // }).then(function(httpResponse)  {
  //   // success
  //   console.log(httpResponse.text);
  //   return httpResponse.text;
  // },function(httpResponse) {
  //   // error
  //   console.error('Request failed with response code ' + httpResponse.status);
  // });
  
//});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});
