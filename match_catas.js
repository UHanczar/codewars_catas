// return string less than max (or whole) and optionally remove spaces from text depending on spaces
function charCheck(text, max, spaces){
  //Do your magic here!
  let result = [];
  let changedText = '';
  let textLength = text.length;

  if(!spaces) {
    text = text.replace(/\s/g, '');
    textLength = text.length;
  }

  if(textLength > max) {
    changedText = text.substr(0, max);
    result.push(false, changedText);

  } else {
    result.push(true);
    result.push(text);
  }

  return result;
}

// charCheck("As Deputy Base Manager on Phobos for five Martian years, I have significant relevant experience.", 90, false);


// return "Yes" if bool === true & "No" if bool === false
function boolToWord( bool ){
  //...
  return bool ? 'Yes' : 'No';
}

// boolToWord(true);

// return sum of array values
function sumR(x) {
  let count = x.length - 1;
  let sum = 0;
  while(count >= 0) {
    sum += x[count];
    count--;
  }
  return sum;
}

// sumR([1,1,1]);

// make lowercase letters in string uppercase and opposite
function alternateCase(s) {
  let res = s.split('').map(x => x.charCodeAt() < 92 && x.charCodeAt() !== 33 ? String.fromCharCode(x.charCodeAt() + 32) : String.fromCharCode(x.charCodeAt() - 32)).join('').replace(/@/g, ' ').replace(/\u0001/g, '!');

  return res;
}

// alternateCase("Hello World");

// find sum of lib chapters
function stockList(listOfArt, listOfCat){
  let res = [];
  let subRes = [];
  let arrToStr = [];
  let sum = 0;
  let arr = listOfArt.map(x => {
    return x.split(' ').filter(x => x.length);
  });
  //console.log(arr);
  for(let i = 0; i < listOfCat.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      // console.log(listOfCat[i], arr[j]);
      if(listOfCat[i] === arr[j][0][0]) {
        subRes.push(listOfCat[i], arr[j][1]);
      }
    }

    if(!subRes.length) {
      subRes.push(listOfCat[i], 0);
    }

    res.push(subRes);
    subRes = [];
  }

  // console.log(res);
  let checkForRes = res.every(x => x[1] == '0');

  if(checkForRes) {
    res = '';
  } else {
    res = res.map(x => {
      if(x.length < 3) {
        if(x[1][0] === '0') {
          x[1] = x[1].substr(1, x[1].length);
        }
        arrToStr = '(' + x[0] + ' : ' + x[1] + ')';
      } else {
        for(let i = 1; i < x.length; i += 2) {
          //console.log(x[i]);
          // console.log(x[i][0]);
          if(x[i][0] === 0) {
            x[i] = x[i].substr(1, x[i].length);
          }
          sum += parseInt(x[i]);

        }
        arrToStr = '(' + x[0] + ' : ' + sum + ')';
        sum = 0;
      }

      return arrToStr;
    });

    res = res.join(' - ');
  }

  return res;
}

// let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// let c = ["A", "B"];
// stockList(b, c);

// repair date format
function timeCorrect(timestring) {
  console.log(timestring);
  let res;
  let reg = /\w{2}:\w{2}:\w{2}/g;

  if(!timestring) {
    res = timestring;
    return res;
  }

  let checkForNums = timestring.split(':');
  let thrueNum = checkForNums.every(x => !isNaN(x));

  if(!thrueNum) {
    res = null;
    return res;
  }

  if(!timestring.match(reg)) {
    res = null;
    return res;
  }

  timestring = timestring.split(':').reverse();

  if(timestring[0] >= 60) {
    let restTime = timestring[0] % 60;
    if(restTime === 0) {
      restTime = 0;
    }
    let timeToPass = parseInt(timestring[0] / 60);
    timestring[1] = parseInt(timestring[1]) + parseInt(timeToPass);
    if(restTime < 10) {
      restTime = '0' + restTime;
    }
    timestring[0] = restTime;
  }

  if(timestring[1] >= 60) {
    let restTime = timestring[1] % 60;
    if(restTime === 0) {
      restTime = 0;
    }
    let timeToPass = parseInt(timestring[1] / 60);
    timestring[2] = parseInt(timestring[2]) + parseInt(timeToPass);
    if(restTime < 10) {
      restTime = '0' + restTime;
    }
    timestring[1] = restTime;
  }

  if(timestring[2] >= 24) {
    let restTime = timestring[2] % 24;
    if(restTime === 0) {
      restTime = '0';
    }

    if(restTime < 10) {
      restTime = '0' + restTime;
    }

    timestring[2] = restTime;
  }


  res = timestring.reverse().join(':');

  return res;
}

// timeCorrect("52:01:01");

// create Caesar cipher function
function rot13(message) {
  //your code here
  console.log(message);
  let res = message.split('').map(x => {
    if (x.charCodeAt() > 64 && x.charCodeAt() < 91) {
      x = x.charCodeAt() + 13;
      if (x > 91) {
        x = 64 + (x - 90);
      }
      x = String.fromCharCode(x);
      return x;
    } else if (x.charCodeAt() > 96 && x.charCodeAt() < 123) {
      x = x.charCodeAt() + 13;
      if (x > 122) {
        x = 97 + (x - 123);
      }
      x = String.fromCharCode(x);
      return x;
    } else {
      return x;
    }

  });
  res = res.join('');
  return res;
}

// rot13("test");

// create function, that return reversed string excluding any simbol except letters
function reverseLetter(str) {
  //coding and coding..
  return str.split('').filter(x => x.charCodeAt() > 96 && x.charCodeAt() < 123).reverse().join('');
}

// reverseLetter("ultr53o?n");

// find if it can be triangle
function isTriangle(a,b,c) {
  return a < b + c && b < c + a && c < a + b; // ? true : false;
}

// isTriangle(7,2,2);

// return lines from viral song "Apple-Pen")
function singSong(a,b){
  //coding and coding..
  let res = '';

  if(a === b) {
    res = `I have two ${a}s.`;
  } else if(b === undefined) {
    if(a[0].match(/[a,e,i,o,u]/i)) {
      res = `I have an ${a}.`;
    } else {
      res = `I have a ${a}.`;
    }
  } else if(b !== undefined) {
    let firstLetter = a.substr(0,1).toUpperCase();
    a = a.replace(a[0], firstLetter);
    console.log(a);
    res = `Uhh! ${a}-${b}!`
  }
  return res;
}

// singSong("puzzle","kata");

// decipher chars from charcodes
function decipher(cipher) {
  //coding and coding..
  let res = [];
  let char = [];
  let arr = cipher.split('');

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '1') {
      char = arr.slice(i, i+3);
      i = i + 2;
      res.push(char);
    } else if(arr[i] === '9') {
      char = arr.slice(i, i+2);
      i = i + 1;
      res.push(char);
    }
  }

  res = res.map(x => {
    x = x.join('');
    x = String.fromCharCode(x);
    return x;
  }).join('');

  return res;
}

// decipher("10197115121");

// return array without index keys
function arrWithoutKeys(array, keys) {
  let counter = 0;
  console.log(keys, res);

  if(typeof keys !== 'number') {
    while(counter < keys.length) {
      array.splice(keys[counter], 1, '3');
      counter = counter+1;
    }
  } else {
    console.log(keys);
    array.splice(keys, 1, '3');
  }

  array = array.filter(x => x !== '3');
  return array;
}

// arrWithoutKeys(['a', 'b', 'c', 'd', 'e'], [1,3]);

function passwordGen(){
  //your code here
  let passwordLength;
  let password = '';
  let randomChar = '';
  let res = [];

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  passwordLength = getRandomArbitrary(6, 20);
  // console.log(passwordLength);

  for(let i = 0; i < passwordLength; i++) {
    if(i % 3 === 0) {
      randomChar = String.fromCharCode(getRandomArbitrary(97, 122));
      password += randomChar;
    } else if(i % 2 === 1) {
      randomChar = String.fromCharCode(getRandomArbitrary(49, 57));
      password += randomChar;
    } else if(i % 2 === 0) {
      randomChar = String.fromCharCode(getRandomArbitrary(65, 90));
      password += randomChar;
    }

  }

  // console.log(password);

  password = password.split('');
  while(password.length) {
    let num = getRandomArbitrary(0, password.length);
    let char = password.splice(num, 1);
    res.push(char);
  }

  res = res.join('');

  return res;
}

// passwordGen();

// find double 'g' in string
function gHappy(str) {
  //coding and coding..
  str = str.split('');
  let flag;

  if(!str.some(x => x === 'g')) {
    flag = true;
  }

  let lastG = str.lastIndexOf('g');
  console.log(lastG - 1);
  for(let i = 0; i <= lastG - 1; i++) {
    if(str[i] === 'g') {
      if(str[i] !== str[i+1] && str[i] !== str[i-1]) {
        flag = false;
        return flag;
      } else if(str[i] === str[i+1] || str[i] === str[i-1]) {
        flag = true;
      }
    }
  }

  return flag;
}

// gHappy("gg0gg3gg0gg");


// return middle character if s.length % 2 === 0 or two characters
function getMiddle(s) {
  //Code goes here!
  let pivot = '';
  s.length % 2 === 0 ? pivot = s.substr(Math.floor((s.length / 2) - 1), 2) : pivot = s.substr(Math.floor(s.length / 2), 1);
  return pivot;
}

// getMiddle("middle");