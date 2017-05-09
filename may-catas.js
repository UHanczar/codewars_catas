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