var http = require('http');
var url = require('url');
var options = {
    host: 'www.betaar3.com',
    path: '/jsp/BT60B.jsp?Submit=Refresh'
}
var trimmedWordsh;
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
	//var trimmedWords = data.match(/\b\w+(?=r\b)/g);
var trimmedWords=data.slice(900, 1200);
trimmedWordsh=trimmedWords.split(",");
        console.log(trimmedWordsh[6],trimmedWordsh[7]);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>    <h1>Lattitude:'+trimmedWordsh[6]+'   Longittude:'+trimmedWordsh[7]+' </h1> <div> <a href="geo:'+trimmedWordsh[6]+','+trimmedWordsh[7]+'?z=zoom">Click to View first Location of betaar3.com in Android Phone.</a>   </div></html>');
res.end();
}).listen(8080);
