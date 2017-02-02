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

// function, which returns the sum of a sequence of integers
const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  // May the Force be with you
  let counter = begin;
  if(begin >= end) {
    return 0;
  } else if((end - begin) < step) {
    return begin;
  }
  console.log(begin, end, step);
  while(begin < end - (step - 1)) {
    begin += step;
    counter += begin;
  }

  return counter;
};

// sequenceSum(2, 6, 2);

// returns if ticket is lucky?
function isLucky(ticket) {
  console.log(ticket);
  let firstPart = '';
  let secondPart = '';
  let counter = 0;
  if(!ticket.match(/\w{6}/g)) {
    console.log('wrong');
    counter = 1;
  }
  console.log('true');
  firstPart = ticket.slice(0,3).split('').reduce((counter, i) => counter += parseInt(i), 0);
  secondPart = ticket.slice(3).split('').reduce((counter, i) => counter += parseInt(i), 0);
  console.log(firstPart, secondPart);

  if(firstPart === secondPart && counter !== 1) {
    return true;
  } else {
    return false;
  }
}

// isLucky('123321');