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