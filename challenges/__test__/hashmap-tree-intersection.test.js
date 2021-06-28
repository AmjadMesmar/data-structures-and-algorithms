'use strict';
const {treeIntersection,BinaryTree,Node} = require('../hashmap-tree-intersections/hashmap-tree-intersections');

describe('Tree Intersection Test',() => {

  it('Should successfully return an array of intersected values',() => {

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

    let one1 = new Node(1);
    let two1 = new Node(2);
    let three1 = new Node(13);
    let four1 = new Node(42);
    let five1 = new Node(33);
    let six1 = new Node(5);
    let seven1 = new Node(8);
    let eight1 = new Node(6);
    let nine1 = new Node(91);

    one1.left = two1;
    one1.right = three1;
    two1.left = six1;
    six1.right = seven1;
    seven1.left = eight1;
    seven1.right = nine1;
    three1.left = four1;
    three1.right = five1;

    let melon = new BinaryTree(one);
    let waterMelon = new BinaryTree(one1);

    expect(treeIntersection(melon,waterMelon)).toEqual([1,2,6,8,5]);
  });

  it('Should throw an exception if one of the inputs is not a Binary tree',() => {

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
    let melon = new BinaryTree(one);

    expect(() => treeIntersection(melon,5)).toThrow('Inputs shall be only 2 binary trees!');
    expect(() => treeIntersection('string',melon)).toThrow('Inputs shall be only 2 binary trees!');

  });

  it('Should throw an exception if one of the inputs is null',() => {

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
    let melon = new BinaryTree(one);

    expect(() => treeIntersection(melon)).toThrow('Inputs shall be only 2 binary trees!');
  });

});
