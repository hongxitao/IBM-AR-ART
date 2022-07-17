const request = require('request');

var latitude = 51.502108;
var longitude = -0.116684;

const options = {
    method: 'GET',
    url: 'https://api.weather.com/v1/geocode/' + latitude + '/' + longitude + '/observations.json',
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
