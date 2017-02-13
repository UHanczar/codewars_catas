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


// returns numbers, which s3 divides s1,s2 and their sum

function multiples(s1,s2,s3){
  let arr = [];
  let common;
  for(let i = 0; i <= s3; i++) {
    if(i % s1 === 0 && i % s2 === 0)
      arr.push(i);
  }
  arr.shift();
  return arr;
}

// multiples(26, 10, 3548);

// convert number in any base cistem
function numberToString(n, base) {
  let result = '';
  let sign = '';
  if(n < 0) {
    sign = '-';
    n = -n;
  }
  do {
    result  += String(n % base);
    n = Math.floor(n /= base);
    //console.log(result);
    //console.log(n);
  } while(n > 0);
  return sign + result;
}

// numberToString(13, 2);



//copy array two times
function partlist(arr) {
  let transArr = [].concat(arr);
  let endArr = [].concat([arr], [transArr]);
  return endArr;
}

// partlist(["I", "wish", "I", "hadn't", "come"]);

//receiving 'Hello, World' not from String
const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);


// create array of length
function createArrayOfTiers(num) {
  num = num.toString();
  let res = [];

  for(let i = 1; i <= num.length; i++) {
    res.push(num.substring(0, i));
  }

  return res;
}

// createArrayOfTiers(420);

// Given the array shuffled, consisting of elements a1, a2, ..., and their sumvalue in random order, return the sorted array of original elements a1, a2,... .
function shuffledArray(shuffled) {
  //coding and coding..

  let sortedArr = shuffled.sort((a, b) => a < b ? -1 : 1);
  console.log(sortedArr);
  let sum = sortedArr.reduce((counter, x) => counter += x) / 2;
  console.log(sum);
  let delNum = sortedArr.indexOf(sum);
  sortedArr.splice(delNum, 1);

  return sortedArr;
}

// shuffledArray([208,178,-78,191,-157,-9,-41,181,86,-6,9,-200]);


// return sum of number digits
function digital_root(n) {
  // ...
  let res;
  let str = n.toString();
  res = str.split('');
  function toRoot(resString) {
    return resString.reduce((counter, x) => counter += parseInt(x), 0).toString();
  }

  while(res.length > 1) {
    console.log(res);
    res = toRoot(res);
    res = res.split('');
  }
  res = parseInt(res.toString());

  return res;
}

// digital_root(195);


// make camelCase from string
String.prototype.camelCase=function(){
  //your code here
  let camelLetters = this.split(' ').map(x => {
    return x.slice(0,1).toUpperCase();
  });

  let res = this.split(' ').map((x, i) => {
    let splArr = x.split('');
    splArr.splice(0,1,camelLetters[i]);
    let camelArr = splArr.join('');
    return camelArr;
  });
  return res.join('');
}

//"test case".camelCase();

// invert numbers
function invert(array) {
  if(!array.length) {
    return [];
  }

  return array.map(x => x > 0 ? x - (x * 2) : x + (-x * 2));
}

// invert([1,-2,3,-4,5]);

// mix letters except first & last one in words, more than 4 characters.
let string = `According to a researcher at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.`;

function jumble(string){
  let replaceCharString  = string.replace(/\./g, ' .').replace(/,/g, ' ,').replace(/\?/g, ' ?').replace(/!/g, ' !').split(' ');
  let res = replaceCharString.map(x => {
    //console.log(x);
    if(x.length === 4 ) {
      let firtsLetter = x[0];
      let lastLetter = x[x.length - 1];
      let trankWord = x.split('').filter(x => x !== '.').join('').slice(1, 3).split('').reverse().join('');
      let word = firtsLetter + trankWord + lastLetter;
      return word;
    } else if(x.length > 5) {

      let firtsLetter = x[0];
      let lastLetter = x[x.length - 1];
      let trankWord = x.split('').filter(x => x !== '.').join('').slice(1, -1).split('').sort().join('');
      let word = firtsLetter + trankWord + lastLetter;
      //console.log(firtsLetter, lastLetter);
      //console.log(b,x, word);
      //console.log(d);
      return word;
    } else {
      return x;
    }
  });
  return res.join(' ').replace(/\s\./g, '.').replace(/ ,/g, ',').replace(/\s\?/g, '?').replace(/\s!/g, '!');
}

// jumble(string);


// bubble sorting
const bubbleSort = nums => {
  let counter = 0;
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < nums.length; i++) {
      counter++;
      if(nums[i] > nums[i+1]) {
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  console.log(counter);
  return nums;
};


// bubbleSort([10,5,3,8,2,6,4,7,9,1]);

// replace nth character in string
function replaceNth(text, n, oldValue, newValue) {
  let counter = 0;
  let arr = text.split('');
  //console.log(arr);
  let res = arr.map(x => {
    if(x === oldValue) {
      counter++;
      if(counter % n === 0) {
        console.log(x);
        return newValue;
      } else {
        return x;
      }
    } else {
      return x;
    }
  });

  return res.join('');
}

// replaceNth("Vader said: No, I am your father!", 2, 'a', 'o');


// return average of two array numbers
function averages(numbers) {
  let res = [];
  console.log(numbers);
  if( numbers == null || numbers.length < 2) {
    return [];
  }

  for(let i = 0; i < numbers.length - 1; i++) {
    let newNum = (numbers[i] + numbers[i+1]) / 2;
    res.push(newNum);
  }
  return res;

}


// averages([1, 3, 5, 1, -10]);


// find missing letter in array
function findMissingLetter(array) {
  let res;
  let counter = array[0].charCodeAt();

  for(let i = 0; i < array.length; i++) {
    if(array[i].charCodeAt() === counter) {
      counter++;
    } else {
      console.log(counter);
      res = String.fromCharCode(counter);
    }
  }

  return res;
}

// findMissingLetter(['a','b','c','d','f']);


// insertion sort
let insertionSort = nums => {
  let counter = 0;
  for (let i = 1; i < nums.length; i++) {
    console.log('i loop: ' + nums[i]);
    for (let j = 0; j < i; j++) {
      counter++;
      //console.log(nums[j]);
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        console.log(spliced);
        nums.splice(j, 0, spliced[0]);
        console.log(nums);
      }
    }
  }
  console.log(counter);
  return nums;
};

// insertionSort([10,5,3,8,2,6,4,7,9,1]);


// remove spaces from strings
function noSpace(x){
  return x.match(/[^\s]/g).join('');
}

// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');



function vowelShift(text, n) {
  let res;
  console.log(n);
  if(!text) {
    return text;
  }
  let arr = text.split(''); // arr
  let vowelRes = []; // res;
  //console.log(arr);
  arr.map((x, i) => {
    if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
      vowelRes.push([x, i]);
    }
  });

  if(n > vowelRes.length || n < 0) {
    n = n % vowelRes.length;
  }
  console.log(n);

  if(!vowelRes.length) {
    return text;
  }

  console.log(res);

  let resForSplice = Array.from(vowelRes);
  let firstPart = resForSplice.splice(n, resForSplice.length);
  let newRes = firstPart.concat(resForSplice);
  console.log(newRes);

  for(let i = 0; i < arr.length; i++) {
    //console.log(arr[i], i);
    for(let j = 0; j < newRes.length; j++) {
      //console.log(newRes[j][1]);
      if(i === newRes[j][1]) {
        //console.log(arr[i], newRes[j][0], res);
        arr.splice(i, 1, vowelRes[j][0]);
      }
    }
  }

  res = arr.join('');
  return res;
}


// vowelShift('This is a beautiful day', 3)