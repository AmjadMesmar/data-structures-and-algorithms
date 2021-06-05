'use strict';

let Node = require('../tree/node');
let BinarySearchTree = require('../tree/tree');


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
    let test = new BinarySearchTree();

    // act

    // assert
    expect(test.root).toEqual(null);

  });

  it('Can successfully instantiate a tree with a single root node', () => {

    // arrange
    let test = new BinarySearchTree();
    let node1 = new Node(5);

    // act
    test.add(node1);

    // assert
    expect(test.root.value).toEqual(5);
    expect(test.root.left).toEqual(null);
    expect(test.root.right).toEqual(null);

  });

  it('Can successfully add a left child and right child to a single root node', () => {

    // arrange
    let test = new BinarySearchTree();
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(-1);

    // act
    test.add(node1);
    test.add(node2);
    test.add(node3);

    // assert
    expect(test.root.value).toEqual(1);
    expect(test.root.left.value).toEqual(-1);
    expect(test.root.right.value).toEqual(2);

  });
  it('Can successfully return a collection from a preorder traversal', () => {

    // arrange
    let test = new BinarySearchTree();
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
    expect(test.preOrder()).toEqual([1, -1, -4, 2, 5]);

  });

  it('Can successfully return a collection from an inorder traversal', () => {

    // arrange
    let test = new BinarySearchTree();
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
    expect(test.inOrder()).toEqual([-4, -1, 1, 2, 5]);

  });

  it('Can successfully return a collection from a postorder traversal', () => {

    // arrange
    let test = new BinarySearchTree();
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
    expect(test.postOrder()).toEqual([-4, -1, 5, 2, 1]);

  });

});
