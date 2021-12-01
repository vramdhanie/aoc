const fs = require("fs");

function readArray(fileName) {
  return fs.readFileSync(fileName, "utf8").split("\n");
}

function readIntArray(fileName) {
  return readArray(fileName).map(Number);
}

module.exports = {
  readArray,
  readIntArray,
};
