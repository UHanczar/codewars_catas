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

// merge sort
const mergeSort = nums => {
  if(nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const leftPart = nums.slice(0, middle);
  const rightPart = nums.slice(middle, length);

  console.log({leftPart, rightPart});
  return merge(mergeSort(leftPart), mergeSort(rightPart));
};

const merge = (left, right) => {
  const res = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while(left.length) {
    res.push(left.shift());
  }

  while(right.length) {
    res.push(right.shift());
  }

  //console.log('ResConcat: ' + res.concat(left, right));
  console.log('ResConcaES6: ' + [...res, ...left, ...right]);

  //console.log(res);
  return res;
};

// mergeSort([10,5,3,8,2,6,4,7,9,1]);

// quich sort
const quickSort = nums => {
  if(nums.length <=1) {
    return nums;
  }

  let pivot = nums[nums.length - 1];
  let leftArr = [];
  let rightArr = [];

  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] < pivot) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ... quickSort(rightArr)];
};

// quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]);

// create array
class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  serialize() {
    return this.data;
  }
}

// const array = new ArrayList();