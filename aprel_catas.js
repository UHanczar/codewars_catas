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



