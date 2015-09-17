function printHelp() {
  console.log("1.js Laurens OB");
  console.log("");
  console.log("usage:");
  console.log("--help            print this help");
  console.log("--file={NAME}     read the file of {NAME} and output");
  console.log("");

}

var args = require('minimist')(process.argv.slice(2), {string: "file"});

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld3.js");

hello.say(args.file)

  //The default way is using then()
  //
  //then(done, content){}
  //
  //we don't using it because we are using asynquence and for that reason "done" is not necessary

  .val(function(content){
    console.log(content.toString());

  })
  .or(function(err){
    console.error("Error: " + err);
  });


