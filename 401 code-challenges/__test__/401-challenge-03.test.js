/* eslint-disable no-undef */

const arrayFun = require ('../code-challenge-class-03/401-challenge-03');



describe('401-challenge-03', () => {
  it('should return the index of the inputed number',() => {
    expect(arrayFun([1,2,3,4,5,6],5)).toStrictEqual('4');
  });
});
