/* eslint-disable no-unused-vars */

'use strict';
const insertionSort = require('../Sort/insertion-sort/insertion-sort');

describe('node class Test', () => {

  it('should sort an array using insertion sort', () => {
  //assign
    let array = [9,-3,0,10,5];
    //act
    //assert
    expect(insertionSort(array)).toEqual([-3,0,5,9,10]);
  });
  it('Edge case: if input was not an array', () => {
    //assign
    let test = 5;
    //act
    //assert
    expect(insertionSort(test)).toEqual(5);
  });

  it('Edge case: if input was null', () => {
    //assign
    let test = 5;
    //act
    //assert
    expect(() => insertionSort()).toThrow('Input is null!');
  });
});
