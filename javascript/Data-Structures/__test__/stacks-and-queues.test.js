/* eslint-disable no-unused-vars */
'use strict';

let Node = require ('../linked-list/node.js');
let SnQ  = require ('../stacksAndQueues/stacks-and-queues.js');

describe('Stack class Test', () => {
  it('Can successfully push onto a stack', () => {

    // arrange
    let test = new SnQ.Stack;

    // act
    test.push(5);

    // assert
    expect(test.top.value).toEqual(5);

  });

  it('Can successfully push multiple values onto a stack', () => {

    // arrange
    let test = new SnQ.Stack;

    // act
    test.push(5);
    test.push(2);
    test.push(3);

    // assert
    expect(test.top.value).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {

    // arrange
    let test = new SnQ.Stack;
    test.push(5);
    test.push(2);
    test.push(3);

    // act
    test.pop();
    // assert
    expect(test.top.value).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {

    // arrange
    let test = new SnQ.Stack;
    test.push(5);
    test.push(2);
    test.push(3);

    // act
    test.pop();
    test.pop();
    test.pop();

    // assert
    expect(test.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {

    // arrange
    let test = new SnQ.Stack;
    test.push(5);
    test.push(2);
    test.push(3);
    test.pop();

    // act
    // assert
    expect(test.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack', () => {

    // arrange
    let test = new SnQ.Stack;
    // act
    // assert
    expect(test).toEqual({'top': null});
  });

  it('Calling pop or peek on empty stack raises exception', () => {

    // arrange
    let test = new SnQ.Stack;
    // act
    // assert
    expect(() => test.pop()).toThrow(`can not pop from empty stack!`);
    expect(() => test.peek()).toThrow(`This is an empty stack`);
  });

});

describe('Queue class Test', () => {
  it('Can successfully enqueue into a queue', () => {

    // arrange
    let test = new SnQ.Queue;

    // act
    test.enqueue(5);

    // assert
    expect(test.front.value).toEqual(5);

  });

  it('Can successfully enqueue multiple values into a queue', () => {

    // arrange
    let test = new SnQ.Queue;

    // act
    test.enqueue(5);
    test.enqueue(2);
    test.enqueue(3);

    // assert
    expect(test.front.value).toEqual(5);
    expect(test.back.value).toEqual(3);

  });

  it('Can successfully dequeue out of a queue the expected value', () => {

    // arrange
    let test = new SnQ.Queue;
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);

    // act
    test.dequeue();

    // assert
    expect(test.front.value).toEqual(2);
    expect(test.back.value).toEqual(3);

  });

  it('Can successfully peek into a queue, seeing the expected value', () => {

    // arrange
    let test = new SnQ.Queue;
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    // act
    // assert
    expect(test.peek()).toEqual(1);

  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    // arrange
    let test = new SnQ.Queue;
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    // act
    test.dequeue();
    test.dequeue();
    test.dequeue();
    // assert
    expect(test.front).toEqual(null);
    expect(test.back).toEqual(null);

  });

  it('Can successfully instantiate an empty queue', () => {

    // arrange
    let test = new SnQ.Queue;

    // act

    // assert
    expect(test.front).toEqual(null);
    expect(test.back).toEqual(null);

  });

  it('Calling dequeue or peek on empty queue raises exception', () => {

    // arrange
    let test = new SnQ.Queue;

    // act

    // assert
    expect(() => test.dequeue()).toThrow(`Cant dequeue from an empty queue!`);
    expect(() => test.peek()).toThrow(`Cant find peek of an empty queue!`);

  });

});

