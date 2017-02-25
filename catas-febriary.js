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


// function shifts vowels according to n
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

// vowelShift('This is a beautiful day', 3);

// Convert integers given as string into ASCII uppercase letters
function convert(number){
  // ...Convert integers given as string into ASCII uppercase letters...
  let arr = number.split('');
  let arrForDoubles = [];
  let res = [];
  for(let i = 0; i < arr.length-1; i+=2) {
    let tempNum = arr[i] + arr[i+1];
    arrForDoubles.push(tempNum);
  }

  res = arrForDoubles.map(x => x = String.fromCharCode(x)).join('');
  return res;
}

// convert("656667");

// Sum all the numbers of the array except first and last
function sumArray(array) {

  if(!array) {
    return 0;
  }
  array.sort((a, b) => {
    if(a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  let res = array.splice(1, array.length - 2);
  return res.reduce((counter, x) => counter+= x, 0);
}

// sumArray([ 6, 2, 1, 8, 10 ]);


// increment number in string or + 1
function incrementString (strng) {
  // return incrementedString
  let res;
  let counter = 0;
  let numsToAdd;
  let arr = strng.split('');
  let arrFromNums = arr.filter(x => !isNaN(x)).join('');
  // console.log(arrFromNums);
  if(!arrFromNums.length) {
    res = arr.join('') + 1;
    return res;
  } else {
    for(let i = 0; i < arrFromNums.length; i++) {
      if(arrFromNums[i] === '0') {
        counter++;
      } else {
        break;
      }
    }

    if(counter > 0) {
      numsToAdd = (parseInt(arrFromNums) + 1).toString();

      if(arrFromNums.length > numsToAdd.length) {
        let difInLength = arrFromNums.length - numsToAdd.length;
        // console.log(difInLength);
        let nullPart = new Array(difInLength).fill('0');
        nullPart = nullPart.concat(numsToAdd).join('');
        // console.log(nullPart);
        res = arr.splice(0, arr.length - arrFromNums.length).concat(nullPart).join('')
        return res;
      }

      res = arr.splice(0, arr.length - arrFromNums.length).concat(numsToAdd).join('');
      // console.log(numsToAdd);
      // console.log(counter);


      return res;
    }

    numsToAdd = (parseInt(arrFromNums) + 1).toString();
    res = arr.splice(0, arr.length - arrFromNums.length).concat(numsToAdd).join('');
    // console.log(numsToAdd);
    // console.log(counter);
    return res;

  }
}

// incrementString ('hello099');

//simple filtering for even nums
function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  return numbersArray.filter(x => x % 2 === 0);
}
// getEvenNumbers([2,4,5,6]);

// returns the sum of all the multiples of 3 or 5 below the number passed in
function solution(number){
  let res = 0;
  for(let i = 1; i < number; i++) {
    if(i % 5 === 0 && i % 3 !== 0 || i % 3 === 0) {
      res += i;
    }
  }
  return res;
}

// solution(20);


//simple function sorts array and returnd two biggest nums
function twoOldestAges(ages){
  return ages.sort((a,b) => {
    if(a > b) {
      return 1;
    } else {
      return -1;
    }
  }).splice(ages.length - 2, ages.length);
}

// twoOldestAges([1, 2, 10, 8]);


// returns missing length of array
function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays);
  let missingGap = 0;
  if(!arrayOfArrays || arrayOfArrays.length === 0 ) {
    return missingGap;
  }

  let hollowArray = arrayOfArrays.some(x => x == null || !x.length);
  if(hollowArray) {
    return missingGap;
  }
  let innerArrsLength = arrayOfArrays.map(x => {
    if(x === '[]') {
      return 0;
    }
    return x.length;

  }).sort((a, b) => {
    if(a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  //console.log(innerArrsLength);
  missingGap = innerArrsLength[0];
  //console.log(counter);
  for(let i = 0; i < innerArrsLength.length; i++) {
    if(missingGap !== innerArrsLength[i]) {
      break;
    }
    missingGap++;
  }
  return missingGap;
}

// getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [1 ], [ 5, 6, 7, 8, 9 ]] );

// returns score of Los Angeles basketball teams
function getLosAngelesPoints(results) {
  // your awesome code here
  let resLA = results.filter(x => x[0].match(/^Los Angeles +\D/)).map(x => x[1].toString().split(':')).reduce((counter, x) => counter += parseInt(x[0]), 0);
  return resLA;
}

basketballResults = [
  ['Golden State Warriors', '559:503'],
  ['Memphis Grizzlies', '550:511'],
  ['Portland Trail Blazers', '527:520'],
  ['Houston Rockets', '494:458'],
  ['San Antonio Spurs', '469:460'],
  ['Phoenix Suns', '523:522'],
  ['Minnesota Timberwolves', '495:494'],
  ['Utah Jazz', '399:402'],
  ['Sacramento Kings', '420:431'],
  ['Denver Nuggets', '646:658'],
  ['Los Angeles Clippers', '382:422'],
  ['Dallas Mavericks', '492:513'],
  ['Los Angeles Lakers', '641:637'],
  ['Oklahoma City Thunder', '315:318'],
  ['New Orleans Pelicans', '433:454']
];

//getLosAngelesPoints(basketballResults);


function reverseWords(str){
  // reverse those words
  return str.split(' ').reverse().join(' ');
}

// reverseWords("yoda doesn't speak like this" );


//let reg = "<div>test</div>".replace(/(<([^>]+)>)/g, ""); // remove all html tags

// delete all vowels in string
function disemvowel(str) {
  return str.replace(/a|e|i|o|u/gi, '');
}

// disemvowel('This website is for losers LOL!');


// split array according to second parameter number and add it to new array
function makeParts(arr, chunkSize) {
  let res = [];
  let part = [];
  for(let i = 0; i < arr.length; i++) {
    part = arr.splice(0, chunkSize);
    res.push(part);
  }
  if(arr.length) {
    res.push(arr);
  }
  return res;
}

// makeParts([1,2,3,4,5], 2);

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


// creating an array from min to max

function generateIntegers(m, n) {
  let counter = [];
  let max = n;
  for(let i = m; i <=n; i++) {

    counter.push(i);


  }
  return counter;
}

//generateIntegers(2, 5);

// creacte function, that divide number on 100, 50, 20 dollar bills
function withdraw(n) {
  //coding and coding..
  console.log(n);
  let res = [];
  let hundred = 0;
  let fifteen = 0;
  let twenty = 0;

  if(n >= 100) {
    while(n >= 100) {
      hundred++;
      n -= 100;
    }
  }

  if(n < 100 && n % 20 === 0) {
    while(n >= 20) {
      twenty++;
      n -= 20;
    }
  } else if(n % 50 === 0) {
    fifteen++;
    n -= 50;
  } else if(n === 70 || n === 90) {
    console.log(n);
    fifteen++;
    n -= 50;
    while(n >= 20) {
      twenty++;
      n -= 20;
    }
  } else {
    hundred--
    fifteen++;
    n += 50;
    while(n >= 20) {
      twenty++;
      n -= 20;
    }
  }

  res.push(hundred, fifteen, twenty);

  return res;
}

// withdraw(250);