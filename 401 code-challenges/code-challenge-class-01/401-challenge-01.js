'use strict';

let array = [1,2,3,4,5,6];
let array2 = [10,9,8,7,6,5,4,3,2,1];

// Method 1:
function reverseArray (arr){
  let newArr = arr.reverse();
  console.log('Reverse array with reverse(): ',newArr);
  return newArr;
}


// Method 2:
function reverseArray2 (arr){
  let newArr = [];
  for (let i = arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
  }
  console.log('Reverse array with for loop :',newArr);
  return newArr;
}

// reverseArray(array);
reverseArray(array);
reverseArray2(array2);

module.exports = {reverseArray2,reverseArray};
