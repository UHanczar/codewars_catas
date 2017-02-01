// changes numbers dividing them for thousand's divider
function changeNumber(str) {
  let strArrStr = str.split('').reverse().join('');
  let newStr = '';
  for(let i = 0; i < strArrStr.length; i++) {
    console.log(i);
    (!strArrStr.includes('.') && i % 3 === 0) ? newStr += ' ' : newStr;
    newStr += strArrStr[i]
  }

  let res = newStr.split('').reverse().join('').trim();
  return res;

}

// changeNumber('1234567890575757577');