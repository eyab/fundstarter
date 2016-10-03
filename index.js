// needs node http modules 
var http=require('http');
var url=require('url');
var fs=require('fs');

// create new instance 
http.createServer(function (req, res) {
    // callback for the httpServer

    var parse=url.parse(req.url,true);
    var path=parse.pathname;
    // replying to the browser

    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('index.html', 'utf8',function (err, data) {
if(err){
            res.write('bad file');
            throw err;
            res.end();
        }
        if(data){
            res.write(data.toString('utf8'));
        // write something to browser 
              res.write('<h3>Using readFile method:Read file in asynchronously (non-blocking)</h3>');
              res.write(path);
            res.end();
        }
    });
}).listen(8080); // the server will listen on port 8080


