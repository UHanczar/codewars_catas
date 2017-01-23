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

//remove("Hi!fsa sfa! fja;f!");

// function takes temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer
function celsiusToRomer(temp) {
  temp = temp * 0.52500 + 7.50;
  return temp;
}

// celsiusToRomer(24)