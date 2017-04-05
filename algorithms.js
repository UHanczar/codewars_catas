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

// quick sort
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


// linked list
class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const node = this.head;
      this.head = this.tail = null;
      return node.value;
    }
    const penultimate = this._find(null, (value, nodeValue, i, current) => current.next === this.tail );
    const ans = penultimate.next.value;
    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return ans;
  }
  _find(value, test=this.test) {
    let current = this.head;
    let i = 0;
    while(current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  get(index) {
    const node = this._find(index, this.testIndex);
    if (!node) return null;
    return node.value;
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      }
      else {
        this.head = null;
      }
      this.length--;
      return head.value;
    }

    const node = this._find(index-1, this.testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (!node.next.next) this.tail = node.next;
    this.length--;
    return excise.value;
  }
  test(search, nodeValue) {
    return search === nodeValue;
  }
  testIndex(search, __, i) {
    return search === i;
  }
  serialize() {
    const ans = [];
    let current = this.head;
    if (!current) return ans;
    while (current) {
      ans.push(current.value);
      current = current.next;
    }
    return ans;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// binary tree
class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root === null) {
      // if no head - create new head
      this.root = new Node(value);
    }
    else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          // go left

          if (current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(value);
            break;
          }
        }
        else {
          // go right
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }
  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }
  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}

// AVL Tree
class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    else {
      this.root.add(value);
    }
  }
  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }
  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.height = 1;
  }
  add(value) {

    if (value < this.value) {
      // go left

      if (this.left) {
        this.left.add(value);
      }
      else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    }
    else {
      // go right

      if (this.right) {
        this.right.add(value);
      }
      else {
        this.right = new Node(value);
      }
      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }
  balance() {
    const rightHeight = (this.right) ? this.right.height : 0;
    const leftHeight = (this.left) ? this.left.height : 0;

    console.log( this.value, leftHeight, rightHeight );

    if ( leftHeight > rightHeight + 1 ) {
      const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
      const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }

      this.rotateLL();
    }
    else if ( rightHeight > leftHeight + 1 ) {
      const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
      const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }

      this.rotateRR();
    }
  }
  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    }
    else if (!this.right || (this.left && this.right.height < this.left.height)) {
      this.height = this.left.height + 1;
    }
    else { //if (!this.left || this.right.height > this.left.height)
      this.height = this.right.height + 1;
    }
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}

// hash table
class HashTableSet {
  constructor() {
    this.table = new Array(255);
  }
  add(input) {
    this.table[this.hash(input, 255)] = input;
  }
  check(input) {
    return !!this.table[this.hash(input, 255)];
  }
  hash(input, max) {
    let num = 0;
    for (let i = 0; i < input.length; i++) {
      num += input.charCodeAt(i) * i;
    }
    return num % max;
  }
}


// map function
const double = num => 2*num;
const doubleEach = input => input.map( double );

const square = num => num*num;
const squareEach = input => input.map( square );

const doubleAndSquareEach = input => input.map(double).map(square);

const myMap = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};

// reduce
const addTogether = list => {
  return list.reduce((acc, num) => acc+num, 0);
};

const concatenateStringsWithSpaces = list => {
  return list.reduce((acc, string) => acc + string + " ", "");
};

const squaresAndSubtracts = list => {
  return list
    .map( num => num*num )
    .reduce( (accumulator, num) => accumulator-num );
};

const myReduce = (list, fn, seed) => {
  let answer = seed;
  for (let i = 0; i < list.length; i++) {
    answer = fn(answer, list[i]);
  }
  return answer;
};

// filter function
const filterOutOdds = nums => nums.filter( num => num % 2 === 0);

const filterState = (list, state) => list.filter( person => person.state === state );

const showOutOfCADevs = list => {
  return list
    .filter( person => person.state !== 'CA')
    .map( person => person.name.toUpperCase() )
    .reduce( (acc, name) => `${acc}, ${name}` );
};

const myFilter = (list, fn) => {
  const answer = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      answer.push(list[i]);
    }
  }
  return answer;
};