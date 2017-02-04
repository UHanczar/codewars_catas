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

// find, if num in arr % 2 === 0 and return it
function findElement(arr, func) {
  let num = arr.filter(x => x % 2 === 0);
  let res = num[0];
  if(func(res)) {
    return res;
  } else {
    return undefined;
  }

}

// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


// Flatten a nested array
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let res =arr.toString().split(',').filter(x => x !== '').map(x => {
    let n = parseInt(x);
    if(parseInt(x)) {
      return n;
    } else if(x == '[object Object]') {
      return {};
    } else {
      return x;
    }

  });

  return res;
}

// steamrollArray([1, {}, [3, [[4]]]]);


// find square of arrow triangle
function arrowArea(a,b) {
  // your code
  // your code
  let res = (a * b) / 2 / 2;
  return parseFloat(res.toFixed(2));
}

// arrowArea(4,2);


// calculate number of seats in theater
function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding
  let res = (nCols - (col - 1)) * (nRows - row);
  return res;

}

// seatsInTheater(16,11,5,3);