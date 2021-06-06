/* eslint-disable no-unused-vars */
'use strict';

const Node = require('../../../javascript/Data-Structures/tree/node');
const BinaryTree = require('../BinaryTree');


describe('node class Test', () => {

  it('should create new  Node object', () => {
    // arrange
    let test =  new Node(5);
    // act
    // assert
    expect(test.value).toEqual(5);
    expect(test.left).toEqual(null);
    expect(test.right).toEqual(null);

  });
});

describe('Binary Search Tree class Test', () => {
  it('Can successfully instantiate an empty tree', () => {

    // arrange
    let test = new BinaryTree();

    // act

    // assert
    expect(test.root).toEqual(null);

  });

  it('Can successfully find max value in a binary tree', () => {

    // arrange
    let test = new BinaryTree();
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(-1);
    let node4 = new Node(5);
    let node5 = new Node(-4);

    // act
    test.add(node1);
    test.add(node2);
    test.add(node3);
    test.add(node4);
    test.add(node5);

    // assert
    expect(test.findMaximumValue()).toEqual(5);

  });

  it('Can successfully throw an exception when findMaximumValue called ona an empty binary tree', () => {

    // arrange
    let test = new BinaryTree();

    // act

    // assert
    expect(() => test.findMaximumValue()).toThrow('This is an empty tree!');
  });

});
