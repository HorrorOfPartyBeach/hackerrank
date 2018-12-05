'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the timeInWords function below.
function timeInWords(h, m) {
  const minuteTime = {
    0: "o'clock",
    1: "one minute",
    2: "two minutes",
    3: "three minutes",
    4: "four minutes",
    5: "five minutes",
    6: "six minutes",
    7: "seven minutes",
    8: "eight minutes",
    9: "nine minutes",
    10: "ten minutes",
    11: "eleven minutes",
    12: "twelve minutes",
    13: "thirteen minutes",
    14: "fourteen minutes",
    15: "quarter",
    16: "sixteen minutes",
    17: "seventeen minutes",
    18: "eighteen minutes",
    19: "nineteen minutes",
    20: "twenty minutes",
    21: "twenty one minutes",
    22: "twenty two minutes",
    23: "twenty three minutes",
    24: "twenty four minutes",
    25: "twenty five minutes",
    26: "twenty six minutes",
    27: "twenty seven minutes",
    28: "twenty eight minutes",
    29: "twenty nine minutes",
    30: "half"
  }

  const hourTime = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve"
  }

  let startTime = 0;
  if (m > 30)
    startTime = 60 - m;
  else
    startTime = m;
  if (m === 0)
    return `${hourTime[h] + " o' clock"}`;
  else {
    let words = minuteTime[startTime];
    if (m <= 30)
      words += ' past ' + hourTime[h];
    else
      words += ' to ' + hourTime[h + 1];
    return `${words}`;
  }

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = parseInt(readLine(), 10);

  const m = parseInt(readLine(), 10);

  let result = timeInWords(h, m);

  ws.write(result + "\n");

  ws.end();
}