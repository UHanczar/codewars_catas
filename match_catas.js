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