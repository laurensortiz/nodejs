function readFile(filename) {

 return ASQ(function (done){
   var stream = fs.createReadStream(filename);
   var content =  "";

   stream.pipe( fs.createWriteStream(filename + ".backup") );

   stream.on("data", function(chunk){

     content += chunk;
   });

   stream.on("end", function (){
     done(content);
   });
 });

}

function delayMsg(done, content) {
  setTimeout(function () {
    done(content);
  }, 1000);
}

function say(filename) {
  return readFile(filename).then( delayMsg );
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.say = say;