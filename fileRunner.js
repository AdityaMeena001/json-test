const { groupBy } = require("lodash");
var fs = require("fs");
let props;

function runFile(fileName = "input.json", depth = 3) {
  const input = JSON.parse(fs.readFileSync(fileName, "utf8"));
  const data = input.data;
  props = Object.keys(data[0]);

  doGrouping(data, 0, depth);
}

function doGrouping(data, idx, depth, indent = "") {
  if (depth <= 0 || idx >= props.length) {
    return;
  }

  const currentProp = props[idx];

  const groupedData = groupBy(data, currentProp);

  Object.keys(groupedData).forEach((key, index, array) => {
    const isLast = index === array.length - 1;

    if (depth > 1 && idx + 1 < props.length) {
      doGrouping(groupedData[key], idx + 1, depth - 1);
    }
  });
}


module.exports = { runFile, doGrouping };