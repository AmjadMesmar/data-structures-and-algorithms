'use strict';
function merge(arr, left, mid, right)
{
  let number1 = mid - left + 1;
  let number2 = right - mid;

  // Create temp arrays
  let leftArray = new Array(number1);
  let rightArray = new Array(number2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < number1; i++)
    leftArray[i] = arr[left + i];
  for (let j = 0; j < number2; j++)
    rightArray[j] = arr[mid + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = left;

  while (i < number1 && j < number2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    }
    else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < number1) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < number2) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,left, right){
  if(left>=right){
    return;//returns recursively
  }
  let mid =left+ Math.floor((right-left)/2);
  mergeSort(arr,left,mid);
  mergeSort(arr,mid+1,right);
  merge(arr,left,mid,right);
  return arr;
}

let arr = [-5,7,1,-9,25,10];

console.log(mergeSort(arr,0,arr.length - 1));
