let array = [1,2,3,4,5,6];

// function binarySearch(sortedArray,key){
//   let check = false;
//   let index = -1;
//   for (let i in sortedArray){
//     if(sortedArray[i] === key){
//       index = i;
//       check = true;
//       return index;
//     }}
//   if (!check)
//     return index;
// }

// console.log(binarySearch(array,6));

function binarySearch(array, number){
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let i = Math.floor((start + end) / 2);
    if (array[i] === number) {
      return i;
    } else if (array[i] < number) {
      start = i + 1;
    } else {
      end = i - 1;
    }
  }
  return -1;
}

console.log(binarySearch(array,6));

module.exports = binarySearch;
