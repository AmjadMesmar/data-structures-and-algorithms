'use strict';

class Queue {//FIFO
  constructor() {
    this.values = new Array();
  }

  enqueue(value) {
    this.values.push(value);//
  }

  dequeue() {
    this.values.shift();
  }

  peek() {
    return this.values[0];// this should be the first item added
  }
}

function quickSort(arr,start,end) {

  if(!arr){
    throw 'Input is null!';
  }

  if(arr[0] === undefined){
    throw 'Input not an array!';
  }

  // let start =0;
  // let end = arr.length-1;

  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
}

function partition(arr, start, end){

  // Taking the last element as the pivot
  let queue = new Queue();
  queue.values = arr;
  let queueValues = queue.values;

  const pivotValue = queueValues[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

let arr = [-5,7,1,-9,25,10];

console.log(quickSort(arr,0,arr.length - 1));
