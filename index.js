var http = require('http')
     var fs = require('fs')
     var filename = 'index.html'
     http.createServer(function(req,response){
	var buff = fs.readFileSync('index.html', "utf8")
	response.writeHead(200, {"Content-type":"text/html"})
	response.write(buff)
	response.end()}).listen(8080);

