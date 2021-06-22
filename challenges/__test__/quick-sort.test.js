/* eslint-disable no-unused-vars */

'use strict';
const quickSort = require('../Sort/quick-sort/quick-sort');

describe('Quick sort Test', () => {

  it('should sort an array using quick sort', () => {
  //assign
    let array = [9,-3,0,10,5];
    //act
    //assert
    expect(quickSort(array,0,array.length-1)).toEqual([-3,0,5,9,10]);
  });
  it('Edge case: if input was not an array', () => {
    //assign
    let test = 5;
    //act
    //assert
    expect(() => quickSort(test)).toThrow('Input not an array!');
  });

  it('Edge case: if input was null', () => {
    //assign
    let test = 5;
    //act
    //assert
    expect(() => quickSort()).toThrow('Input is null!');
  });
});
