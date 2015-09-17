function handleHTTP (req, res) {

  if (req.method === "GET"){

    if (req.url === "/"){
      res.writeHead(200, {"Content-type" : "text/plain"});

      ASQ(function (done){
        setTimeout(function (){
          done(Math.random());
        },1000);
      })
      .then(function (done, msg) {
        setTimeout(function (){
          done(msg);
        }, 1000);
      })
      .then(function(done, num){
        setTimeout(function (){
          res.end("Hello World: " + num + "____s");
        });
      })
      .val(function (msg) {
          res.end(msg);
      });

    }
    else {
      res.writeHead(403);
      res.end("Get out here!");
    }

  }
  else {
    res.writeHead(403);
    res.end("Get out here!");
  }

}

var ASQ = require("asynquence");

var host  = "localhost";
var port = 1103;

var http = require('http');
var http_serv = http.createServer(handleHTTP).listen(port, host);