/* eslint-disable no-undef */

const arrayFun = require ('../code-challenge-class-01/401-challenge-01.js');



describe('401-challenge-01', () => {
  it('should get a reversed array',() => {
    expect(arrayFun.reverseArray2([1,2,3,4,5,6])).toStrictEqual([6,5,4,3,2,1]);
  });
  it('should get a reversed array',() => {
    expect(arrayFun.reverseArray([10,9,8,7,6,5,4,3,2,1])).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});
