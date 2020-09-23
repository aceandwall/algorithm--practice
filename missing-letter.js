function fearNotLetter(str) {
  let firstCharNum = str.charCodeAt(0);
  let lastCharNum = str.charCodeAt(str.length - 1);

  let realRange = [];
  for (let i = firstCharNum; i <= lastCharNum; i++) {
    realRange.push(i);
  }

  let realTotal = realRange.reduce((sumTotal, num) => sumTotal + num);

  let wrongRange = [];
  for (let i = 0; i < str.length; i++) {
    wrongRange.push(str.charCodeAt(i));
  }

  let wrongTotal = wrongRange.reduce((sumTotal, num) => sumTotal + num);

  let numDiff = realTotal - wrongTotal;
  let missingLetter = String.fromCharCode(numDiff);

  if (numDiff === 0) {
    return undefined;
  }

  return missingLetter;
}

fearNotLetter("abce");
