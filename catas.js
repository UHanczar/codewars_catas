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