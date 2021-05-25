'use strict';

/* eslint-disable no-unused-vars */
const Node = require('../linked-list/node.js');
const LinkedList = require('../ll-insertions/ll-insertions..js');
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


describe('Linked list class test', () => {

  it('Can successfully add a node to the end of the linked list',() => {
    //arrange
    let test = new LinkedList;
    //act
    test.append(1);
    test.append(2);
    //assert
    expect(test).toEqual({'head': {'next': {'next': null, 'value': 2}, 'value': 1}});
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    //arrange
    let test = new LinkedList();
    //act
    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);
    test.append(5);
    //assert
    expect(test).toEqual({'head': {'next': {'next': {'next': {'next': {'next': null, 'value': 5}, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 1}});
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);
    //act
    test.insertBefore(3,5);
    //assert
    expect(test).toEqual({'head': {'next': {'next': {'next': {'next': {'next': null, 'value': 4}, 'value': 3}, 'value': 5}, 'value': 2}, 'value': 1}});

  });

  it('Can successfully insert a node before the first node of a linked list', () =>{

    //arrange
    let test = new LinkedList;
    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);
    //act
    test.insertBefore(1,5);
    //assert
    expect(test).toEqual({'head': {'next': {'next': {'next': {'next': {'next': null, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 1}, 'value': 5}});
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);
    //act
    test.insertAfter(3,5);
    //assert
    expect(test).toEqual({'head': {'next': {'next': {'next': {'next': {'next': null, 'value': 4}, 'value': 5}, 'value': 3}, 'value': 2}, 'value': 1}}
    );
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);
    //act
    test.insertAfter(4,5);
    //assert
    expect(test).toEqual({'head': {'next': {'next': {'next': {'next': {'next': null, 'value': 5}, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 1}}
    );
  });

});
