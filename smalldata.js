const { groupBy } = require("lodash");
var fs = require("fs");

function runSmallLodash() {
  const input = JSON.parse(fs.readFileSync("inputSmall.json", "utf8"));
  const data = input;
  const props = Object.keys(data[0]);
  const groupedData = groupBy(data, props[0]);
}

function runSmallestLodash() {
  const input = JSON.parse(fs.readFileSync("inputSmallest.json", "utf8"));
  const data = input;
  const props = Object.keys(data[0]);
  const groupedData = groupBy(data, props[0]);
}

module.exports = { runSmallLodash, runSmallestLodash };
