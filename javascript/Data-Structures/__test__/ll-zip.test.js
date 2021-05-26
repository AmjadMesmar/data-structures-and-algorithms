'use strict';

/* eslint-disable no-unused-vars */
const Node = require('../linked-list/node.js');
const LinkedList = require('../ll-zip/ll-zip.js');
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

  it('Throws an error when inputs are not linked lists', () => {
    // arrange
    let test = new LinkedList.LinkedList;
    let test2 = new LinkedList.LinkedList;

    test.append(1);
    test.append(2);
    test.append(3);

    test2.append(3);
    test2.append(4);
    test2.append(5);
    // act
    // assert
    expect(() => LinkedList.zipLists(test,1)).toThrow(`Invalid input, you must use linked lists!`);
    expect(() => LinkedList.zipLists('test',test2)).toThrow(`Invalid input, you must use linked lists!`);
    expect(() => LinkedList.zipLists(true,1)).toThrow(`Invalid input, you must use linked lists!`);

  });

  it('It shall zip both linked lists when both linked lists have the same length', () => {
    // arrange
    let test = new LinkedList.LinkedList;
    let test2 = new LinkedList.LinkedList;

    test.append(1);
    test.append(2);
    test.append(3);

    test2.append(3);
    test2.append(4);
    test2.append(5);
    // act
    // assert
    expect(LinkedList.zipLists(test,test2)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 5}, 'value': 3}, 'value': 4}, 'value': 2}, 'value': 3}, 'value': 1}});

  });

  it('It shall zip both linked lists when one linked list is longer or shorter than the other', () => {
    // arrange
    let test = new LinkedList.LinkedList;
    let test2 = new LinkedList.LinkedList;

    test.append(1);
    test.append(2);
    test.append(3);
    test.append(7);

    test2.append(3);
    test2.append(4);
    test2.append(5);
    // act
    // assert
    expect(LinkedList.zipLists(test,test2)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 7}, 'value': 5}, 'value': 3}, 'value': 4}, 'value': 2}, 'value': 3}, 'value': 1}}
    );
  });

});
