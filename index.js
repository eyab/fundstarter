var fs = require('fs') ;
var http = require('http');

var requestListener = function (req, res) {
    res.writeHead(200);

    fs.stat("index.html", function (err, stats) {

        if (err) {
            return console.log(err);
        }
        fs.open("index.html", 'r', function (err, fd) {
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

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
