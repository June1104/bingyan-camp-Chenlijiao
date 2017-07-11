/**
 * Created by June on 2017/7/11.
 */
var express = require('express')
var http = require('http')
var app = new express()
app.get('/api/v1/movie/top250', function (req, response) {
    http.get('http://api.douban.com/v2/movie/top250', function (res) {
        //console.log("statusCode: ", res.statusCode);
        //console.log("headers: ", res.headers);
        var json = '';
        res.on('data', function (d) {
            json += d;
        });
        res.on('end',function(){
            //获取到的数据
            json = JSON.parse(json);
            response.send(json)
            console.log(json)
        });
    }).on('error', function (e) {
        console.error(e);
    });
})

app.post('/post', function (req, res) {
    res.send('post')
})

app.listen(3000)

console.log('server start!')