//导入 express 模块, npm install express -S
//导入 cors模块, npm install cors -S
const express = require("express")
const cors = require("cors");
const request = require("request");

let app = express();
//处理跨域问题
app.use(cors());

//设置api接口,请求该接口的时候返回 weather
app.get("/api",function(req,res){
    //在命令行中查看传递过来的参数
    console.log(req.query);
    const options = {
        method: 'GET',
        url: 'https://api.weather.com/v1/geocode/' + req.query.latitude + '/' + req.query.longitude + '/observations.json',
        qs: {
            units: 'e',
            language: 'en-GB',
            apiKey: '29244201b19a4508a44201b19ad508c1'
        },
        headers: {accept: 'application/json'}
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        let jsondata = JSON.parse(body)
        console.log(jsondata)
        console.log("current condition:", jsondata["observation"]["wx_phrase"])
        var str = JSON.stringify(jsondata["observation"]["wx_phrase"]);

        res.end(str)
    });
})

//监听3000端口
app.listen(3300);

module.exports = app;
module.exports = request;
