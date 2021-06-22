/* eslint-disable no-unused-vars */
'use strict';

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
  const pivotValue = arr[end];
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

module.exports = quickSort;



