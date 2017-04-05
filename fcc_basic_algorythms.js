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

// find if all letters from one string have their pairs in another one
function mutation(arr) {
  let res;
  let checkArr = arr.splice(1, 1).toString().toLowerCase().split('');
  arr = arr.toString().toLowerCase();
  let counter = 0;
  while(counter < checkArr.length) {
    if(arr.indexOf(checkArr[counter]) !== -1) {
      counter++;
      res = true;
    } else {
      res = false;
      break;
    }
  }

  return res;
}

// mutation(["hello", "Hello"]);

// return not false values
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let res = arr.filter(x => x);
  return res;
}

// bouncer([7, "ate", "", false, 9]);

// find and delete all values corresponds to args
function destroyer(arr) {
  // Remove all the values
  let args = [].slice.call(arguments).splice(1);
  let res = [];
  for(let i = 0; i < args.length; i++) {
    arr = arr.filter(x => x !== args[i]);
  }

  return arr;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// find index of num in array
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = [...arr, num].sort((a, b) => a - b);
  return arr.indexOf(num);
}

// getIndexToIns([40,10, 30, 60], 65);

// Caecar cipher
function rot13(str) { // LBH QVQ VG!
  let res = str.split('').map(x => {
    if(x.charCodeAt() > 64 && x.charCodeAt() < 91) {
      let char = x.charCodeAt() + 13;
      char = char > 90 ? char = 65 + (char - 91) : char;
      x = String.fromCharCode(char);
    }
    return x;
  }).join('');
  console.log(res);
  return res;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC!");