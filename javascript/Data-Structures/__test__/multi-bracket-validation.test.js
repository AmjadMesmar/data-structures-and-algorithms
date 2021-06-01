'use strict';

const isValid = require('../multi-bracket-validation/multi-bracket-validation');

describe('Checks if string is valid', () => {
  it('If string is valid', () => {

    expect(isValid('{}')).toEqual(true);
    expect(isValid('()')).toEqual(true);
    expect(isValid('[]')).toEqual(true);
    expect(isValid('{([])}')).toEqual(true);
    expect(isValid('{}{Code}[Fellows](())')).toEqual(true);

  });

  it('If string is not valid', () => {

    expect(isValid('{')).toEqual(false);
    expect(isValid('(')).toEqual(false);
    expect(isValid('[')).toEqual(false);
    expect(isValid('{([)}')).toEqual(false);

  });

  it('If input is not a string, throw an exception', () => {


    expect(() => isValid(1)).toThrow('Input is not a string! or string is empty!');

  });

  it('If input is an empty string, throw an exception', () => {

    expect(() => isValid('')).toThrow('Input is not a string! or string is empty!');

  });
});
