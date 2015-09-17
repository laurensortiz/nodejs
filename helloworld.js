function say(filename, callback) {
  return fs.readFile(filename, function (err, content) {
    if (err) {
      callback(err);
    }
    else {
      setTimeout(function () {
        callback(null, content);
      }, 1000);
    }
  });
}

var fs = require("fs");

module.exports.say = say;