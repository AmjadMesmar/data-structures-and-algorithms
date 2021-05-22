/* eslint-disable no-unused-vars */
const Node = require('../code-challenge-class-05/node.js');
const LinkedList = require('../code-challenge-class-05/LL.js');
const { expect } = require('@jest/globals');


describe('node class Test', () => {
  it('should create new object', () => {
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

  it('Can successfully instantiate an empty linked list',() => {
    //arrange
    let test = new LinkedList;
    //act

    //assert
    expect(test).toEqual({'head': null});
  });

  it('should add new item to empty linked list', () => {
    //arrange
    let test = new LinkedList();
    let value = 5;
    //act
    test.add(value);
    //assert
    // expect(test.head).not().toBeNull();
    expect(test.head.value).toEqual(value);
    expect(test.head.next).toBeNull();
  });

  it('should add new item to not empty linked list', () => {
    //arrange
    let test = new LinkedList();
    test.add(5);
    let newValue = 10;
    //act
    test.add(newValue);
    //assert
    expect(test.head.next.value).toEqual(newValue);
    expect(test.head.next.next).toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list and Can properly return a collection of all the values that exist in the linked list', () =>{

    //arrange
    let test = new LinkedList;
    //act
    test.add(1);
    test.add(2);
    test.add(3);
    //assert
    expect(test).toEqual({'head': {'next': {'next': {'next': null, 'value': 3}, 'value': 2}, 'value': 1}}
    );
  });

  it('should add new Head', () => {
    //arrange
    let test = new LinkedList();
    test.add(5);
    let newValue = 10;
    //act
    test.addNewHead(newValue);
    //assert
    expect(test.head.value).toEqual(newValue);
    expect(test.head.next.value).toEqual(5);
  });

  it('should change head value', () => {
    //arrange
    let test = new LinkedList();
    test.add(5);
    let newValue = 10;
    //act
    test.insert(newValue);
    //assert
    expect(test.head.value.value).toEqual(newValue);
  });


  it('should check value in linked list', () => {

    //arrange
    let test = new LinkedList();
    test.add(1);
    test.add(2);
    test.add(3);
    let value1 = 2;
    let value2 =4;
    //act
    //assert
    expect(test.include(2)).toEqual(true);
    expect(test.include(4)).toEqual(false);

  });

  it('should return linked list as a string', () => {

    //arrange
    let test = new LinkedList();
    test.add(1);
    test.add(2);
    test.add(3);
    test.add(4);
    test.add(5);

    //act
    test.toString();

    //assert
    expect(test.toString()).toEqual(` { 1 }  ->  { 2 }  ->  { 3 }  ->  { 4 }  ->  { 5 }  -> NULL`);
  });

});
