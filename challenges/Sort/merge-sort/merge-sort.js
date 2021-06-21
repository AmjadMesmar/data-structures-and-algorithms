/* eslint-disable no-unused-vars */
'use strict';

function mergeSort(arr) {

  if(!arr){
    throw 'Input is null!';
  }

  if(arr[0]=== undefined){
    throw 'Input not an array!';
  }


  let n = arr.length;
  const mid = n / 2;

  // Base case or terminating case
  if(arr.length < 2){
    return arr;
  }

  const left = arr.splice(0, mid);
  return merge(mergeSort(left),mergeSort(arr));
}

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the arr gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrs
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right arr)
  return [ ...arr, ...left, ...right ];
}


module.exports = mergeSort;



