const fs = require("fs");

function readArray(fileName, sep = "\n") {
  return fs.readFileSync(fileName, "utf8").split(sep);
}

function readIntArray(fileName, sep = "\n") {
  return readArray(fileName, sep).map(Number);
}

module.exports = {
  readArray,
  readIntArray,
};
