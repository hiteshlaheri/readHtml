var http = require('http');
var url = require('url');
var options = {
    host: 'www.betaar3.com',
    path: '/jsp/BT60B.jsp?Submit=Refresh'
}
var trimmedWordsh;
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
var seconds = 30, the_interval = seconds * 1000;
setInterval(function() {
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

},the_interval);
if(trimmedWordsh==null){
res.write('<html>    <h1>Lattitude:0  Longitude:0 </h1> <div> <a href="google.navigation:q=0,0">Wait for first Location of betaar3.com in Android Phone.</a>   </div></html>');
}else{
res.write('<html>    <h1>Lattitude:'+trimmedWordsh[6]+'   Longitude:'+trimmedWordsh[7]+' </h1> <div> <a href="google.navigation:q='+trimmedWordsh[6]+','+trimmedWordsh[7]+'">Click to View first Location of betaar3.com in Android Phone.</a>   </div></html>');
}
res.end();
}).listen(8080);
