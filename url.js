var http = require('http');
var url = require('url');

http.createServer(function (req,res){ 
res.writeHead(200,{'content-type':'text/htm'});
var q =url.parse(req.url,true).query;            //query string parse
var dates = q.year +" " + q.month;
res.end(dates);
}).listen(8080);