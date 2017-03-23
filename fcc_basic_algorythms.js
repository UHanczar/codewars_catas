// reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// reverseString("hello");

// number factorial
function factorialize(num) {
  return num !== 0 ? num * factorialize(num - 1) : 1;
}

// factorialize(5);

// find, if string is palindrome or not;
function palindrome(str) {
  // Good luck!
  const checkForChars = str.toLowerCase().replace(/[^A-Za-z0-9]/ig, '');
  const reverseStr = checkForChars.split('').reverse().join('');
  return checkForChars === reverseStr;
}

// palindrome("1 eye for of 1 eye.");

// find longest word in string
function findLongestWord(str) {
  let res = str.split(' ').map(x => x.length).sort();
  // return Math.max.apply(null, res); // es5 version
  return Math.max(...res);

}

// findLongestWord("The quick brown fox jumped over the lazy dog");

// make first letter of each word upperCase (the other letters - lowerCase)
function titleCase(str) {
  let res = str.split(' ').map(x => {
    x = x.toLowerCase();
    let capLetter = x.substr(0, 1).toUpperCase();
    x = x.replace(x[0], capLetter);
    return x;
  }).join(' ');

  return res;
}

// titleCase("I'm a little tea pot");

// return array consisted from max number of each of arrays
function largestOfFour(arr) {
  // You can do this!
  let res = [];
  arr.map(x => {
    x = x.sort((a,b) => a > b ? 1 : -1 );
    // res.push(Math.max.apply(null, x));
    res.push(Math.max(...x));
  });

  return res;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// find if end of string corresponds with target
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(-target.length) === target;
}

// confirmEnding("Bastian", "n");

// duplicate str num times
function repeatStringNumTimes(str, num) {
  // repeat after me
  let counter = 0;
  let res = '';
  while(counter < num) {
    res += str;
    counter++;
  }
  return res;
}

// repeatStringNumTimes("abc", 3);

// truncate string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3) {
    return str.split('').splice(0, num).join('') + '...';
  }

  return str.length > 3 && str.length > num ? str.split('').splice(0, num - 3).join('') + '...' : str.split('').splice(0, num).join('');
}

// truncateString("A-tisket a-tasket A green and yellow basket", 11);


// divide array according to size number
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let res = [];
  for(let i = 0; i < arr.length; i += size) {
    let tempArr = arr.slice(i, i+size);
    res.push(tempArr);
    tempArr = [];
  }
  return res;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// return array after deleting indexes from its head according to howMany
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;
}

// slasher([1, 2, 3], 2);

