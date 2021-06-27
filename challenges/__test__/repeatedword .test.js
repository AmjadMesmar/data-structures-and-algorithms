'use strict';
const {repeatedWord} = require('../repeatedword/repeatedword');

describe('Repeated Word',() => {

  it('Should successfully return first repeated word',() => {

    let test = 'I love coding, coding is the best!';

    expect(repeatedWord(test)).toEqual('coding');
  });

  it('Should return that there is no repeated words',() => {

    let test = 'I love coding';

    expect(repeatedWord(test)).toEqual('No repeated words were found.');
  });

  it('Should throw an exception if input is not a string',() => {


    expect(() => repeatedWord(5)).toThrow('Input shall be a string!');
  });

  it('Should throw an exception if input is a null',() => {


    expect(() => repeatedWord()).toThrow('Input shall be a string!');
  });

});
