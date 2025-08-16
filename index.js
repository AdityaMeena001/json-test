// for testing purpose

const { runFile } = require('./fileRunner.js');

const test_lodash = false;

const files = [
  "input.json",
  "inputSmall.json",
  "inputSmallestNum.json",
  "inputSmallestChar.json",
]

files.map(file => {
  const start = performance.now();
  runFile(file, 3);
  const end = performance.now();
  const timeTaken = end - start;
  console.log(`Time taken: ${file} : ${timeTaken} ms`);
})

