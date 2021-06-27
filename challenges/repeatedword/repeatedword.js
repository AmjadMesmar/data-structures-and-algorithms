'use strict';
const {HashTable} = require('../hashtable/hashtable');


function repeatedWord(string){
  if((typeof string !== 'string') || (string === null)){
    throw 'Input shall be a string!';
  }

  const wordsArray=string.toLowerCase().split(/\W+/g);
  let hastTable = new HashTable(wordsArray.length);

  for (let i in wordsArray){
    if(hastTable.contains(wordsArray[i]))
      return wordsArray[i];
    else
      hastTable.add(wordsArray[i],wordsArray[i]);
  }
  return 'No repeated words were found.';
}


module.exports = {repeatedWord};

