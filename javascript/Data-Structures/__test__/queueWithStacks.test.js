'use strict';

let PesudoQueue = require('../queueWithStacks/queueWithStacks.js');

describe('PesudoQueue class Test', () => {
  it('Can successfully insert into Queue', () => {

    // arrange
    let test = new PesudoQueue;

    // act
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.enqueue(4);
    test.enqueue(5);

    // assert
    expect(test.stack1.top.value).toEqual(5);
  });

  it('Can successfully throw an exception when Queue is empty', () => {

    // arrange
    let test = new PesudoQueue;

    // act

    // assert
    expect(() => test.dequeue()).toThrow('Can not dequeue from an empty Queue');
  });

  it('Can successfully throw an exception after filling the Queue and emptying it', () => {

    // arrange
    let test = new PesudoQueue;

    // act
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.enqueue(4);
    test.enqueue(5);

    test.dequeue();
    test.dequeue();
    test.dequeue();
    test.dequeue();
    test.dequeue();

    // assert
    expect(() => test.dequeue()).toThrow('Can not dequeue from an empty Queue');

  });

  it('Can successfully dequeue from non empty Queue', () => {

    // arrange
    let test = new PesudoQueue;

    // act
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.enqueue(4);
    test.enqueue(5);

    test.dequeue();

    // assert
    expect(test.stack2.top.value.value).toEqual(2);

  });
});
