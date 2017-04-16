// sum all numbers between min and max values of an array
function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let res = [];

  for(let i = min; i <= max; i++) {
    res.push(i);
  }

  res = res.reduce((sum, counter) => sum += counter, 0);

  return res;
}

// sumAll([1, 4]);

// find unique items in two arrays;
function diffArray(arr1, arr2) {
  const newArr = [];
  let item;
  // Same, same; but different.

  const findUniq = (arr1, arr2) => {
    arr1.map(x => {
      if(arr2.indexOf(x) < 0) {
        newArr.push(x);
      }
    });
  };

  findUniq(arr1, arr2);
  findUniq(arr2, arr1);

  return newArr;
}

//also es6 decision
function diffArray(arr1, arr2) {
  // Same, same; but different.
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// converter to roman numerals
const convertToRoman = (num) => {
  const arabNumeral = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let romanNumber = '';

  for(let i = 0; i < arabNumeral.length; i++) {
    while(arabNumeral[i] <= num) {
      romanNumber += romanNumeral[i];
      num -= arabNumeral[i];
    }
  }
  return romanNumber;
};

// convertToRoman(36);

// return array of values corresponding to course
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  console.log(keys);

  arr = collection.filter(x => {
    for(let i = 0; i < keys.length; i++) {
      if(!x.hasOwnProperty(keys[i]) || x[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

// whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }, { "a": 1 }], { "a": 1, "b": 2 });


//  replace word before to word after, minding uppercase
function myReplace(str, before, after) {
  let res = '';
  let checkCapital = before.charCodeAt();
  console.log(checkCapital);
  if(checkCapital > 96 && checkCapital < 123) {
    res = str.replace(before, after);
  } else {
    let firstLetter = after.slice(0, 1).charCodeAt() - 32;
    firstLetter = String.fromCharCode(firstLetter);
    console.log(firstLetter);
    let fixedAfter = firstLetter + after.slice(1);
    res = str.replace(before, fixedAfter);
  }

  return res;
}

// myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


// replace consonants
function translatePigLatin(str) {
  let vowelGrout = /[aeiou]/ig;
  let cutChars = [];
  let res = '';
  if(str[0].match(vowelGrout)) {
    res = str + 'way';
  } else {
    str = str.split('');
    while(!str[0].match(vowelGrout)) {
      cutChars = cutChars.concat(str.shift());
    }
    res = str.concat(cutChars, 'ay').join('');
  }
  return res;
}

// translatePigLatin("ccconsonant");

// find missing letter
function fearNotLetter(str) {
  let res = '';
  arr = str.split('');
  let start = arr[0].charCodeAt();

  for(let i = 0; i < arr.length; i++) {
    let currentChar = arr[i].charCodeAt();
    if(currentChar !== start) {
      res = String.fromCharCode(currentChar - 1);
      break;
    }
    start++;
  }
  return res;
}

// fearNotLetter("acde");


// find unique elements in array;
function uniteUnique(arr) {
  let args = [].slice.call(arguments);
  const array = [];

  const res = args.reduce((counter, x) => {
    for(let i = 0; i < x.length; i++) {
      if(counter.indexOf(x[i]) === -1) {
        counter.push(x[i]);
      }
    }
    return counter;
  }, []);
  return res;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// replace symbols
function convertHTML(str) {
  // &colon;&rpar;
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// convertHTML("Dolce & Gabbana");

// change string
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let res = str.split('');
  for(let i = 0; i < res.length; i++) {
    if(res[i] === ' ' || res[i] === '-') {
      res[i+1] = res[i+1].toUpperCase();
    }
  }
  res = res.join('');
  res = res.replace(/-|_| /g, '').split('').map(x => x.charCodeAt() > 64 && x.charCodeAt() < 91 ? '-'+x : x).join('').replace(/^-/, '').toLowerCase();
  return res;
}

// spinalCase('Teletubbies say Eh-oh');


// sum of all odd fibonnachi numbers
function sumFibs(num) {
  let res = [];
  let a = 1;
  let b = 1;
  let c = 0;
  res.push(a, b);
  while(c <= num) {
    c = a + b;
    res.push(c);
    a = b;
    b = c;

  }
  res = res.splice(0, res.length - 1);
  console.log(res);
  return res.filter(x => x % 2 === 1).reduce((counter, x) => counter += x, 0);

}

// sumFibs(1000);


// find the smallest multiplier
function smallestCommons(arr) {
  arr.sort((a, b) => a > b ? 1 : -1);
  let array = [];

  for(let i = arr[0]; i <= arr[1]; i++) {
    array.push(i);
  }
  console.log(array);
  // Variables needed declared outside the loops.
  let num = 0;
  let loop = 1;
  let i;

  // Run code while n is not the same as the array length.
  do {
    num = array[0] * loop * array[1];
    console.log('num: ',num, 'loop: ', loop, 'array1: ', array[1]);
    for (i = 2; i < array.length; i++) {
      if (num % array[i] !== 0) {
        break;
      }
    }

    loop++;

  } while (i !== array.length);

  return num;
}

// smallestCommons([1,5]);

// drop elements according to func
function dropElements(arr, func) {
  // Drop them elements.
  let res = [];
  // let num = func(arr[0]);
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let num = func(arr[i]);
    console.log('num: ', num, 'i: ', arr[i]);
    if(func(arr[0]) === false) {
      if(!num && i > 0) {
        res = arr.slice(arr[i]);
      } else if(!num) {
        res = arr.slice(arr[i+1]);
      }else {
        break;
      }
    } else {
      if(num) {
        res.push(arr[i]);
      } else {
        break;
      }
    }
  }

  return res;
}

// dropElements([0, 1, 0, 1], function(n) {return n === 1;});


// find if add elements of array have prop with value
function truthCheck(collection, pre) {
  // Is everyone being true?
  let res = collection.map(x => {
    let flag;
    if(x.hasOwnProperty(pre) && x[pre]) {
      console.log(x[pre])
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }).filter(x => !x);
  return res.length ? false : true;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

