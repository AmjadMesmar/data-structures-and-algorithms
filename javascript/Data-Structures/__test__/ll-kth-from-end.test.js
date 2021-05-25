'use strict';

/* eslint-disable no-unused-vars */
const Node = require('../linked-list/node.js');
const LinkedList = require('../ll-kth-from-end/ll-kth-from-end.js');
const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('should create new  Node object', () => {
    // arrange
    let value = 5;
    // act
    let node = new Node(value);
    // assert
    expect(node.value).toEqual(5);
    expect(node.next).toEqual(null);
  });
});

describe('Linked list Test', () => {

  it('Return the length of the linked list', () => {
    // arrange
    let test = new LinkedList;
    test.append(1);
    test.append(2);
    test.append(3);
    // act
    // assert
    expect(test.calcLength()).toEqual(3);
  });

  it('Throw an error when k is greater than the length of the linked list', () => {
    // arrange
    let test = new LinkedList;
    test.append(1);
    test.append(2);
    test.append(3);
    // act
    // assert
    expect(() => test.kthFromEnd(4)).toThrow('The number is bigger than the length of the linked list');

  });

  it('Throw an error When k and the length of the list are the same', () => {
    // arrange
    let test = new LinkedList;
    test.append(1);
    test.append(2);
    test.append(3);
    // act
    // assert
    expect(() => test.kthFromEnd(3)).toThrow('The number is bigger than the length of the linked list');

  });

  it('Throw an error when k is not a positive integer', () => {
    // arrange
    let test = new LinkedList;
    test.append(1);
    test.append(2);
    test.append(3);
    // act
    // assert
    expect(() => test.kthFromEnd(-1)).toThrow(`Can't accept a  negative number`);

  });

  it('When the linked list is of a size 1', () => {
    // arrange
    let test = new LinkedList;
    test.append(1);
    // act
    // assert
    expect(test.kthFromEnd(0)).toEqual(1);

  });

  it('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    // arrange
    let test = new LinkedList;
    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);
    test.append(5);
    // act
    // assert
    expect(test.kthFromEnd(2)).toEqual(3);

  });

});
