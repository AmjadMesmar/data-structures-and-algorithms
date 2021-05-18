let array = [1,2,3,4,5,6];

function binarySearch(sortedArray,key){
  let check = false;
  let index = -1;
  for (let i in sortedArray){
    if(sortedArray[i] === key){
      index = i;
      check = true;
      return index;
    }}
  if (!check)
    return index;
}


console.log(binarySearch(array,6));

module.exports = binarySearch;
