const request = require('request');

var postalCode = '56273';
var locationType = '4'
var contryCode = 'US';

const options = {
    method: 'GET',
    url: 'https://api.weather.com/v1/location/' + postalCode + ':' + locationType + ':' + contryCode + '/observations.json',
    qs: {
        units: 'e',
        language: 'en-GB',
        apiKey: '29244201b19a4508a44201b19ad508c1'
    },
    headers: {accept: 'application/json'}
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    jsondata = JSON.parse(body)
    console.log(jsondata)
    console.log("current condition:", jsondata["observation"]["wx_phrase"])
});
