// Growth of a Population

function nbYear(p0, percent, aug, p) {
  // your code
  let init = p0;
  let margin = p;
  let years = 0;
  while(init < margin) {
    init = init + ((init / 100) * percent + aug);
    years++;
  }
  return years;

}

// nbYear(1500, 5, 100, 5000);

// Javascript: return multiples into an array
function multiples(s1,s2,s3){
  let arr = [];

  for(let i = 0; i < s3; i++) {
    if(i % s1 === 0 && i % s2 === 0) {

      arr.push(i);
    }
  }

  arr.shift();
  return arr;
}

// multiples(26, 10, 3548);


// inverses slice array
function inverseSlice(items, a, b) {
  let secArg = b - a;
  items.splice(a, secArg);
  return items;
}

//inverseSlice([12, 14, 63, 72, 55, 24], 2, 4);


// even or odd
function even_or_odd(number) {
  if(number % 2 === 0) return 'Even';
  else return 'Odd';
}

// even_or_odd(4);

// range from min to max with step
function range(start = 0, step = 1, stop) {
  let res = [];

  let args = [];
  for(let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }
  // console.log(args.length);
  if(args.length === 1) {
    start = 1;
    step = 1;
    stop = args[0];
  } else if(args.length === 2) {
    start = args[0];
    step = 1;
    stop = args[1];
  } else {
    start = args[0];
    step = args[1];
    stop = args[2];
  }


  while(start <= stop) {

    res.push(start);
    start += step
  }
  console.log(res);
  return res;
}

//range(5);
//range(3,7);
//range(2,3,15);

// boolean logic from scratch
const or = (a, b) => {
  // your code here :)
  if(a && b) {
    return true;
  } else if(!a && !b){
    return false;
  } else {
    return true;
  }
};

const xor = (a, b) => {
  if(a) {
    if(b) {
      return false;
    } else {
      return true;
    }
  } else if(b) {
    if(a) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }

};


// cut '!' and put it at the end
function remove(s){
  //coding and coding....
  let newStr = '';
  let excl = '';
  let res = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '!') {
      // excl = s.slice(s[i], s[i+1]);
      // console.log(excl);
      // newStr += excl;
      // console.log(newStr);
      excl += s[i];
      //console.log(s[i]);
      s = s.replace(s[i], '');

    }

  }
  console.log(excl);
  console.log(s);
  res = s.concat(excl);
  return res;
}

// removes all excl. marks
function removeTwo(s){
  // let res = '';
  // let newS = s.replace(/!/g, '');
  // console.log(newS);
  // res = newS + '!';
  // return res;

  return s.replace(/!/g, '') + '!';
}

// removeTwo("Hi!!!");
function removeFromEnd(s){
  // let res = '';
  // let newS = s.replace(/!/g, '');
  // console.log(newS);
  // res = newS + '!';
  // return res;

  return s.replace(/(\b!+)|(!*$)/g, '');
}

// removeFromEnd("!Hi! !Hi!!!");


// change words & firCaps letter;
function myReplace(str, before, after) {
  if(before.charCodeAt(0) > 96)  {
    return str.replace(before, after);
  } else {
    let firstLetter = after.slice(0,1);
    //console.log(firstLetter);

    let charCodeOfLetter = after.charCodeAt(0) - 32;
    let numbFromCharCode = String.fromCharCode(charCodeOfLetter);

    console.log(firstLetter, charCodeOfLetter, numbFromCharCode);
    let afterInArray = after.split('');
    afterInArray.shift();
    afterInArray.unshift(numbFromCharCode);
    let replaceAfter = afterInArray.join('');
    console.log(replaceAfter);
    return str.replace(before, replaceAfter);
  }

}

// myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

//remove("Hi!fsa sfa! fja;f!");

// function takes temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer
function celsiusToRomer(temp) {
  temp = temp * 0.52500 + 7.50;
  return temp;
}

// celsiusToRomer(24)


// reverse first & last array elements
function firstReverseTry(arr) {
  //coding and coding..
  if (!arr.length) {
    return [];
  } else if (arr.length === 1) {
    return arr;
  } else {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    arr.shift();
    arr.pop();
    arr.unshift(lastElement);
    arr.push(firstElement);

    return arr;
  }
}

// firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]);

// takes an array of integers as an argument and returns the median of those integers
function median(array) {
//code here
  array.sort((a, b) => a > b);
  if(array.length % 2 === 1) {
    let i = Math.floor(array.length / 2);
    let result = array[i];
    return result;
  } else {
    let firstNumber = array[(array.length / 2) - 1];
    let secondNumber = array[array.length / 2];
    let result = (firstNumber + secondNumber) / 2;
    return result;
  }
}

// median([33,99,100,30,29, 50]);


// return sum of numbers from arr.min to arr.max;
function sumAll(arr) {
  let max = Math.max.apply(0, arr);
  let min = Math.min.apply(0, arr);
  let newArr = [];
  for(let i = min; i <= max; i++) {
    newArr.push(i);
  }
  let res = newArr.reduce((min, max) => min += max, 0);
  return res;
}
// sumAll([1, 4]);


// arr return sum of pos. numbers and length of neg. numb.
function ret(input) {
  input.filter((x) => x > 0);
  if(input.length === 0) {
    return [];
  } else {
    let pos = input.filter((x) => x >= 0);
    let neg = input.filter((x) => x < 0);
    let sumPos = pos.length;
    let sumNeg = neg.reduce((start, counter) => start += counter);
    let res = [];
    res.push(sumPos);
    res.push(sumNeg);
    return res;
  }
}
// ret([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

// delete duplicated letters in a string, when they coupled
function removeDuplicates(str) {
  return str.split('').filter((item,i,array) => item !== array[i-1]).join('');
}
// removeDuplicates('Hellllllllllo');


// TODO: Make some stuff more good here + adding tecting
function howManyLightsabersDoYouOwn(name) {
  if(name === 'Zach') {
    return 18;
  } else {
    return 0;
  }
}

//howManyLightsabersDoYouOwn('Zach');
describe("Solution", function(){
  it("Example tests", function(){
    Test.assertEquals(howManyLightsabersDoYouOwn('Zach'), 18);
    Test.assertEquals(howManyLightsabersDoYouOwn('anyone else'), 0);
  });
});


// function transforms the a string of roman numeral into an integer
function solution(roman){
  // complete the solution by transforming the
  // string roman numeral into an integer
  roman = roman.toUpperCase().split('');
  console.log(roman);
  let romanNumerals = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let num = 0;
  let val = 0;
  while (roman.length) {
    //console.log(lookup[roman[0]]);
    val = romanNumerals[roman.shift()];
    console.log(val);

    num += val * (val < romanNumerals[roman[0]] ? -1 : 1);

  }
  return num;
}

// solution('XXXVI');

// Convert a number into a Roman Numeral
function romanize(num) {
  let integers = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let romanNum = '';
  let i;
  for(i in integers) {
    // console.log(i);
    while(num >= integers[i] ) {
      console.log(integers[i]);
      romanNum += i;
      console.log(romanNum);
      num -= integers[i];
    }
  }
  return romanNum;
}

// romanize(31);

// finds and returns source in collection
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var sourceKey = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < sourceKey.length; i++) {
      if(!obj.hasOwnProperty(sourceKey[i]) || obj[sourceKey[i]] !== source[sourceKey[i]]) {

        return false;
      }
    }
    return true;
  });
}

// whatIsInAName([{ "a": 1, "b": 2, "c": 2 }, { "a": 1, "c": 2 }, { "a": 1, "b": 2 }], { "a": 1, "c": 2 });


// pig latin from FreeCodeCamp
function translatePigLatin(str) {
  let consonants = ['b', 'c', 'd', 'f','g','h','j','k','l','m','p','q','r','s','t','v','w','x','y','z'];
  // console.log(consonants);
  let spl = str.split('');
  let result = '';
  let counter = 0;
  console.log(spl);
  consonants.filter(consonant => {
    if(consonant === spl[0]) {
      let r = spl.shift(spl[0]);
      spl.push(r);
      counter++;
      consonants.filter(consonant => {
        if(consonant === spl[0]) {
          let r = spl.shift(spl[0]);
          spl.push(r);
          counter++;
        }
      });

    }
  });

  if(counter > 0 ) {
    result = spl.join('') + 'ay';
  } else {
    result = spl.join('') + 'way';
  }




  return result;
}

// translatePigLatin("glove");

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let c = /:[-]?\)|:[~]?\)|;[-]?D|;[~]?D|:[-]?D|:[~]?D|;[-]?\)|;[~]?\)/g;
  let counter = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].match(c)) {
      counter++;
    }
  }
  return counter;
}

// countSmileys([':D',':~)',';~D',':)'])

// return last element
function last(list){
  return arguments.length > 1 ? arguments[arguments.length - 1] : list[list.length - 1] || arguments[arguments.length - 1];
}

// last([1,2,3,4,5]);


// return the lowest value or None/null/Nothing if the string is empty.
function lowestTemp(t) {
  // lowest temperature
  if(!t.length) {
    return null;
  }
  let arr = t.split(' ');
  console.log(arr);
  let arrayToNum = arr.map(x => parseFloat(x));
  arrayToNum.sort(function(a,b) {
    if(a > b) {
      return 1;
    } else {
      return -1;
    }
  })

  let res = arrayToNum[0];
  return res;
}
// lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14');

// find count of office staff;
function boredom(staff){
  let counter = 0;
  Object.keys(staff).map(x => {
    // console.log(staff[x]);
    if(staff[x] === 'accounts') {
      counter += 1;
    } else if(staff[x] === 'finance') {
      counter += 2;
    } else if(staff[x] === 'canteen') {
      counter += 10;
    } else if(staff[x] === 'regulation') {
      counter += 3;
    } else if(staff[x] === 'trading') {
      counter += 6;
    } else if(staff[x] === 'change') {
      counter += 6;
    } else if(staff[x] === 'IS') {
      counter += 8;
    } else if(staff[x] === 'retail') {
      counter += 5;
    } else if(staff[x] === 'cleaning') {
      counter += 4;
    } else if(staff[x] === 'pissing about') {
      counter += 25;
    }
  });

  console.log(counter);
  if(counter <= 80) {
    return 'kill me now'
  } else if(counter > 80 && counter < 100) {
    return  'i can handle this';
  } else if(counter >= 100) {
    return 'party time!!';
  }

}
// boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' });
