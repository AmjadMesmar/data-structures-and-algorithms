'use strict';
const {HashTable} = require('../hashtable/hashtable');

function leftJoin (leftTable,rightTable) {
  if((leftTable === undefined) || (rightTable === undefined)){
    throw 'Inputs shall not be a null!';
  }

  if((!leftTable.size) || (!rightTable.size)){

    throw 'Inputs shall be hashtables!';

  }

  let results = [];
  let tableL = leftTable.table;


  for (let i = 0; i <= tableL.length - 1; i++) {
    if(tableL[i]){
      let key1 = Object.keys(tableL[i].head.value)[0];
      let value1 = Object.entries(tableL[i].head.value)[0];
      let check = rightTable.contains(key1);

      if(check){
        let rightData = Object.entries(rightTable.getOne(key1));
        let value2 = Object.values(rightData)[0][1];
        results.push([...value1,value2]);
      }

      if(!check){
        results.push([...value1,'NULL']);
      }

    }
  }


  return results;
}

module.exports = {leftJoin};
