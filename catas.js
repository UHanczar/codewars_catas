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

multiples(26, 10, 3548);