var fs = require('fs');
var filename = "index.html"
var http = require('http');

var Listener = function (req, res) {
    res.writeHead(200);

    fs.stat(filename, function (err, stats) {

	if (err) {
	    return console.log(err);
	}
	fs.open(filename, 'r', function (err, fd) {
	    if (err) {
		return console.log(err);
	    }
	    fs.read(fd, new Buffer(stats.size), 0, stats.size, 0, function (err, bytesRead, buffer) {
		if (err) {
		    return console.log(err);
		}
		res.end(buffer.toString('utf8'));
	    });
         });
     });
}

var server = http.createServer(Listener);
server.listen(process.env.PORT || 8080);

