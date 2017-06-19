// find count of similar nums in array
function duplicateCount(text){
  //...
  let counter = 0;
  let res = text.toLowerCase().split('').sort((a, b) => a > b ? 1 : -1);

  res = res.map((x) => {
    let numsLength = res.filter(char => char === x).length;
    // console.log(l);
    if(numsLength > 1) {
      res = res.filter(char => char !== x);
      counter++;
    }
  });

  return counter;
}

duplicateCount("Indivisibilities");

// duplicateCount("Indivisibilities");


// make regular expression with at least 6 letter with at least one uppercase letter and at least one lowercase letter and number
function validate(password) {
  console.log(password);
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password);
}

// validate('JHD5FJ53');

// find if there is the same amount of x and o in array
function XO(str) {
  //code here
  let arr = str.toLowerCase().split('').filter(x => x === 'x' || x === 'o');
  let x = arr.filter(x => x === 'x').length;
  let o = arr.filter(x => x === 'o').length;
  return x === o;
}

// XO("xxxm");

// find letters after 'l'
function comes_after(str,l) {
  //code
  console.log(str, l);
  let alterL = '';
  if(l.charCodeAt() > 96) {
    alterL = String.fromCharCode(l.charCodeAt() - 32);
  } else {
    alterL = String.fromCharCode(l.charCodeAt() + 32);
  }
  let res = [];
  let arr = str.split('');

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === l || arr[i] === alterL) {
      res.push(arr[i+1]);
    }
  }
  res = res.join('').replace(/[^a-zA-Z]/g, '');
  return res;
}

// comes_after("king kUnta is the sickest rap song ever kNown k!",'k');

// return multi-dimentional array from 0 to x in each arr
function counterEffect(hitCount) {
  //do your thing
  let res = [];
  let arr = hitCount.split('').map(x => {
    let tempArr = [];
    for(let i = 0; i <= parseInt(x); i++) {
      tempArr.push(i);
    }
    res.push(tempArr);
    tempArr = [];
  });

  return res;
}

// counterEffect("1250");

// change all dublicated letters
function reverseCase(string) {
//...
  console.log(string);
  let res = string.split('');
  let ind = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === res[i + 1]) {
      ind.push(i);
      ind.push(i + 1);
      i += 1;
    } else if (res[i] === res[i - 1] && res[i] !== res[i + 1]) {
      ind.push(i)
    }

  }

  if (ind.length === 0) {
    return res.join('');
  } else {
    for (let i = 0; i < ind.length; i++) {
      if (res[ind[i]].charCodeAt() < 92) {
        res[ind[i]] = res[ind[i]].toLowerCase();
      }
      else {
        res[ind[i]] = res[ind[i]].toUpperCase();
      }
    }

    return res.join('');
  }
}

// reverseCase('hello world');