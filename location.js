const request = require('request');

var latitude = 51.51753;
var longtitude = -0.11214;

const options = {
    method: 'GET',
    url: 'https://api.weather.com/v3/location/search',
    qs: {
        query: 'London, Greater London, England, United Kingdom',
        locationType: 'city',
        language: 'en-GB',
        format: 'json',
        apiKey: '29244201b19a4508a44201b19ad508c1'
    },
    headers: {accept: 'application/json'}
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    jsondata = JSON.parse(body)
    console.log(jsondata)
    console.log("latitude:", jsondata["location"]["latitude"][0], "longitude:", jsondata["location"]["longitude"][0])
});
