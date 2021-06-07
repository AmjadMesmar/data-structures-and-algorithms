/* eslint-disable no-unused-vars */
'use strict';

const Node = require('../../javascript/Data-Structures/tree/node');
const BinaryTree = require('../breadth-first/breadth-first');


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

  it('Can successfully traverse tree using breadth first method', () => {

    // arrange

    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    // act
    let test = new BinaryTree();
    test.root = one;

    // assert
    expect(test.breadthFirst()).toEqual([1, 2, 3, 6, 4,5, 7, 8, 9]);

  });

  it('Can successfully throw an exception when breadthFirst is called on an empty binary tree', () => {

    // arrange
    let test = new BinaryTree();

    // act

    // assert
    expect(() => test.breadthFirst()).toThrow('This is an empty tree!');
  });

});
