/* eslint-disable no-undef */

const arrayFun = require ('../code-challenge-class-02/401-challenge-02.js');



describe('401-challenge-02', () => {
  it('should add the inputed number in the middle of the array',() => {
    expect(arrayFun([1,2,3,5,6,7,8],4)).toStrictEqual([1,2,3,4,5,6,7,8]);
  });
});
