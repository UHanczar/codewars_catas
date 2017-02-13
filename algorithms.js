// bubble sorting
const bubbleSort = nums => {
  let counter = 0;
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < nums.length; i++) {
      counter++;
      if(nums[i] > nums[i+1]) {
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  console.log(counter);
  return nums;
};


// bubbleSort([10,5,3,8,2,6,4,7,9,1]);


// insertion sort
let insertionSort = nums => {
  let counter = 0;
  for (let i = 1; i < nums.length; i++) {
    console.log('i loop: ' + nums[i]);
    for (let j = 0; j < i; j++) {
      counter++;
      //console.log(nums[j]);
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        console.log(spliced);
        nums.splice(j, 0, spliced[0]);
        console.log(nums);
      }
    }
  }
  console.log(counter);
  return nums;
};

// insertionSort([10,5,3,8,2,6,4,7,9,1]);

