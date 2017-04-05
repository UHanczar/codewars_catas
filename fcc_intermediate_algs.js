// sum all numbers between min and max values of an array
function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let res = [];

  for(let i = min; i <= max; i++) {
    res.push(i);
  }

  res = res.reduce((sum, counter) => sum += counter, 0);

  return res;
}

// sumAll([1, 4]);

// find unique items in two arrays;
function diffArray(arr1, arr2) {
  const newArr = [];
  let item;
  // Same, same; but different.

  const findUniq = (arr1, arr2) => {
    arr1.map(x => {
      if(arr2.indexOf(x) < 0) {
        newArr.push(x);
      }
    });
  };

  findUniq(arr1, arr2);
  findUniq(arr2, arr1);

  return newArr;
}

//also es6 decision
function diffArray(arr1, arr2) {
  // Same, same; but different.
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);