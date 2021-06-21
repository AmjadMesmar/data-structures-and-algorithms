/* eslint-disable no-unused-vars */

'use strict';
const mergeSort = require('../Sort/merge-sort/merge-sort');

describe('node class Test', () => {

  it('should sort an array using merge sort', () => {
  //assign
    let array = [9,-3,0,10,5];
    //act
    //assert
    expect(mergeSort(array)).toEqual([-3,0,5,9,10]);
  });
  it('Edge case: if input was not an array', () => {
    //assign
    let test = 5;
    //act
    //assert
    expect(() => mergeSort(test)).toThrow('Input not an array!');
  });

  it('Edge case: if input was null', () => {
    //assign
    let test = 5;
    //act
    //assert
    expect(() => mergeSort()).toThrow('Input is null!');
  });
});
