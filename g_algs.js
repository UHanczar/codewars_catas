// binary search, big O(n)
const binary_Search = (list, item) => {
  let min = 0;
  let max = list.length - 1;
  let counter = 0; // to count cycles

  while(min <= max) {
    const mid = Math.floor((min + max) / 2);
    const guess = list[mid];


    if(guess === item) {
      console.log('counter: ' + counter);
      return mid;
    }

    if(guess > item) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    counter = counter + 1;

  }

  return null;
};

// binary_Search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3);

// selection sort. Big O(n * n)
function findSmallest(arr) {
  let smallestNum = arr[0];
  let smallestIndex = 0;
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  const sortedResult = [];

  for(let i = 0, length = arr.length; i < length; i++) {
    let smallest = findSmallest(arr);
    sortedResult.push(arr.splice(smallest, 1)[0]);
  }
  return sortedResult;
}

// selectionSort([5, 3, 6, 2, 10]);