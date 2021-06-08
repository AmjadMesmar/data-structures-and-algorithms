/* eslint-disable no-unused-vars */
'use strict';

const Node = require('../FizzBuzzTree/node');
const K_aryTree = require('../FizzBuzzTree/FizzBuzzTree');


describe('node class Test', () => {

  it('should create new  Node object', () => {
    // arrange
    let test =  new Node(5);
    // act
    // assert
    expect(test.value).toEqual(5);
    expect(test.children).toEqual([]);
    expect(test.children.length).toEqual(0);
  });

  it('should successfully add items to the node children', () => {
    // arrange
    let test =  new Node(5);
    // act
    test.children.push(1);
    test.children.push(2);
    // assert
    expect(test.value).toEqual(5);
    expect(test.children).toEqual([1,2]);
    expect(test.children.length).toEqual(2);

  });
});

describe(' K_ary Tree class Test', () => {

  it('should create a new K_ary Tree object', () => {
    // arrange
    let test =  new K_aryTree();
    // act
    // assert
    expect(test.root).toEqual(null);
  });

  it('should throw an exception when fizzBuzzTree method called on an empty tree', () => {
    // arrange
    let test =  new K_aryTree();
    // act
    // assert
    expect(() => test.fizzBuzzTree()).toThrow('This is an empty tree!');
  });

  it('should create a new K_ary Tree object', () => {
    // arrange
    let test =  new K_aryTree();

    let node1 = new Node(3);
    let node2 = new Node(6);
    let node3 = new Node(15);
    let node4 = new Node(10);
    let node5 = new Node(20);
    let node6 = new Node(30);
    let node7 = new Node(50);
    let node8 = new Node(61);
    let node9 = new Node(19);

    // act

    node1.children.push(node2);
    node1.children.push(node3);
    node1.children.push(node4);
    node4.children.push(node5);
    node4.children.push(node6);
    node3.children.push(node7);
    node3.children.push(node8);
    node5.children.push(node9);
    test.root = node1;

    // assert

    expect(test.fizzBuzzTree()).toEqual({'root': {'children': [{'children': [], 'value': 'Fizz'}, {'children': [{'children': [], 'value': 'Buzz'}, {'children': [], 'value': '61'}], 'value': 'FizzBuzz'}, {'children': [{'children': [{'children': [], 'value': '19'}], 'value': 'Buzz'}, {'children': [], 'value': 'FizzBuzz'}], 'value': 'Buzz'}], 'value': 'Fizz'}});
  });

});
