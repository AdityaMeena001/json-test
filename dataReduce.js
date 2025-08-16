var fs = require("fs");

const input = JSON.parse(fs.readFileSync("input.json", "utf8"));
const data = input.data;

const keyMap = {};

Object.keys(data[0]).forEach((key, idx) => {
  keyMap[key] = String.fromCharCode(97 + idx);
});

// console.log(keyMap);

const smallData = {};
smallData.data = [];

for (let obj of data) {
  const smallObjectNum = {};
  Object.keys(obj).forEach((key) => {
    smallObjectNum[keyMap[key]] = obj[key];
  });
  smallData.data.push(smallObjectNum);
}

fs.writeFile("inputSmall.json", JSON.stringify(smallData), function (err) {
  if (err) throw err;
  console.log("complete");
});

//
// applying smallest object mapping

const valueSet = new Set();

for (let obj of data) {
  Object.keys(obj).map((key) => {
    valueSet.add(obj[key]);
  });
}

const valueNum = {};
const valueChar = {};

const charHash = generateHashArray(1000);
var numHash = 1;

for (let value of valueSet) {
  valueNum[value] = numHash;
  valueChar[value] = charHash[numHash - 1];
  numHash++;
}

// console.log(valueNum);

const smallestDataNum = {};
smallestDataNum.data = [];

const smallestDataChar = {};
smallestDataChar.data = [];

for (let obj of data) {
  const smallObjectNum = {};
  const smallObjectChar = {};

  Object.keys(obj).forEach((key) => {
    smallObjectNum[keyMap[key]] = valueNum[obj[key]];
    smallObjectChar[keyMap[key]] = valueChar[obj[key]];
  });
  smallestDataNum.data.push(smallObjectNum);
  smallestDataChar.data.push(smallObjectChar);
}

fs.writeFile(
  "inputSmallestNum.json",
  JSON.stringify(smallestDataNum),
  function (err) {
    if (err) throw err;
    console.log("complete");
  }
);

fs.writeFile(
  "inputSmallestChar.json",
  JSON.stringify(smallestDataChar),
  function (err) {
    if (err) throw err;
    console.log("complete");
  }
);

function generateHashArray(count = 1000) {
  const hash = [];
  const letters = "abcdefghijklmnopqrstuvwxyz";

  // Single letters: a-z
  for (let i = 0; i < 26 && hash.length < count - 1; i++) {
    hash.push(letters[i]);
  }

  // Double letters: aa-zz
  for (let i = 0; i < 26 && hash.length < count - 1; i++) {
    for (let j = 0; j < 26 && hash.length < count - 1; j++) {
      hash.push(letters[j] + letters[i]);
    }
  }

  // Triple letters: aaa-zzz
  for (let i = 0; i < 26 && hash.length < count - 1; i++) {
    for (let j = 0; j < 26 && hash.length < count - 1; j++) {
      for (let k = 0; k < 26 && hash.length < count - 1; k++) {
        hash.push(letters[k] + letters[j] + letters[i]);
      }
    }
  }

  return hash;
}
