// find if string is prime (hasn't equal parts)
function primeString(s) {
  //coding and coding..
  let exp = '';
  let res;
  let prime;

  if(s.length < 2) {
    return true;
  }

  for(let i = 1; i < s.length; i++) {
    exp = s.substr(0, i);
    console.log(exp);
    res = s.split(exp).join('');
    console.log(res);
    if(res === '') {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  return prime;
}

// primeString('usfausfausfausfausfa');

// find weather both people are equally strong
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  //coding and coding..
  let arr = Array.from(arguments);
  console.log(arr);
  let firstMax = Math.max.apply(null, arr.slice(0, 2));
  let firstMin = Math.min.apply(null, arr.slice(0, 2));
  let secondMax = Math.max.apply(null, arr.slice(2));
  let secondMin = Math.min.apply(null, arr.slice(2));
  console.log(firstMax, secondMax);
  
  return firstMax === secondMax && firstMin === secondMin;
}

// areEquallyStrong(10,5,5,10);

// sort array numbers by multiplying them on their index
function sortByValueAndIndex(array) {
  let counter = 0;
  let res = array.map(x => {
    counter++;
    return {
      pverState: x,
      currState: x * counter
    };
  }).sort((a, b) => a.currState - b.currState).map(x => x.pverState);

  return res;
}

// sortByValueAndIndex([ 23, 2, 3, 4, 5 ]);


// split array on pair and add to single characters '_'
function solution(str){
  let arr = str.split('');
  console.log(arr);
  let res = [];
  for(let i = 0, length = arr.length; i < length; i +=2) {
    let a = arr.splice(0, 2).join('');
    res.push(a);
  }

  res = res.map(x => x.length < 2 ? x + '_' : x);
  return res;
}

// solution('abcde');

// sum average of two arrays
function sumAverage(arr) {
  let res = arr.map(x => {
    let length = x.length;
    return x.reduce((counter, x) => counter += x, 0) / length;
  }).reduce((counter, x) => counter += x, 0);

  return Math.floor(res);
}

// sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 76]]);

// create phone number from array
function createPhoneNumber(numbers){
  return '(' + numbers.splice(0, 3).join('') + ')' + ' ' + numbers.splice(0, 3).join('') + '-' + numbers.splice(0, 4).join('');
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// find time from number
function lateRide(n) {
  //coding and coding..
  let res = '';
  let hours;
  let minutes;
  if(n < 60) {
    n = n.toString();
    res = n.split('').reduce((counter, x) => counter += parseInt(x), 0);
  } else if(n % 60 === 0) {
    hours = parseInt(n / 60);
    res = hours.toString().split('').reduce((counter, x) => counter += parseInt(x), 0);
  } else {
    hours = parseInt(n / 60);
    minutes = (n - (hours * 60));
    res += hours;
    res += minutes;
    res = res.split('').reduce((counter, x) => counter += parseInt(x), 0);
  }
  return res;
}

// lateRide(1439);

// fing the least value which more then current index
function arrayManip(array){
  // your code goes here
  let res = [];

  for(let i = 0; i < array.length; i++) {
    let tempArr = array.slice(i+1).sort((a, b) => a > b ? 1 : - 1).filter(x => x > array[i])[0];
    tempArr ? res.push(tempArr) : res.push(-1);
  }
  return res;
}

// arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28])