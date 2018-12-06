// Complete the timeInWords function below.
function timeInWords(h, m) {
  const numberToWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half'
  };

  let startTime = 0;
  let prefix = '';

  if (m > 30) prefix = 'to';
  else prefix = 'past';

  if (m > 30) startTime = 60 - m;
  else startTime = m;

  if (m === 0) return `${numberToWords[h]} o' clock`;
  if (m === 1) return `one minute ${prefix} ${numberToWords[h]}`;
  if (m === 59) return `one minute ${prefix} ${numberToWords[h + 1]}`;
  else {
    let words = numberToWords[startTime];
    if (m === 15 || m === 30) return `${words} ${prefix} ${numberToWords[h]}`;
    if (m === 45) return `${words} ${prefix} ${numberToWords[h + 1]}`;
    if (m < 30) return `${words} minutes ${prefix} ${numberToWords[h]}`;
    else return `${words} minutes ${prefix} ${numberToWords[h + 1]}`;
  }
}

module.exports = { timeInWords };
