/**
 * Created by June on 2017/7/11.
 */
var express = require('express');
var http = require('http')
var app = express();
/*header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');*/

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})


/*app.get('/api/v1/movie/top250', function (req, response) {
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
})*/


var server = app.listen(3001, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})