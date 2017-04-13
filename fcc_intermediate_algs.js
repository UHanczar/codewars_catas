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

