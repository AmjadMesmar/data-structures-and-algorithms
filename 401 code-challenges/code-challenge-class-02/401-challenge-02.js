let array = [1,2,3,5,6,7,8];

function insertShiftArray (arr,number){
  let newArr = [];
  let middle = Number.parseInt(arr.length/2);
  for (let i = 0; i<=arr.length-1; i++){
    if(i === middle){
      newArr.push(number);
      newArr.push(arr[i]);
    }
    else
      newArr.push(arr[i]);
  }
  console.log('Original Array: ',arr);
  console.log('Array with new number to the middle: ',newArr);
  return newArr;
}


insertShiftArray(array,4);

module.exports = insertShiftArray;
