/* eslint-disable no-unused-vars */
'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // root - left - right
  preOrder() {

    if(this.root === null)
      throw 'This is an empty tree!';

    let result = [];

    let traverse = (node) => {
      // read the root
      result.push(node.value);
      // read left
      if(node.left) traverse(node.left);
      // read right
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - root - right
  inOrder() {

    if(this.root === null)
      throw 'This is an empty tree!';
    let result = [];

    let traverse = (node) => {
      // read left
      if(node.left) traverse(node.left);
      // read the root
      result.push(node.value);
      // read right
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - right - root
  postOrder() {

    if(this.root === null)
      throw 'This is an empty tree!';
    let result = [];

    let traverse = (node) => {
      // read left
      if(node.left) traverse(node.left);
      // read right
      if(node.right) traverse(node.right);
      // read the root
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  add(node){

    let current = this.root;

    if (this.root === null){
      this.root = node;
    }
    while(current !== null){

      if (node.value > current.value){
        if(current.right === null){
          current.right = node;
          break;
        }
        current = current.right;
      }
      if(node.value < current.value){
        if(current.left === null){
          current.left = node;
          break;
        }
        current = current.left;

      }
    }

  }

  contains (number){

    if(this.root === null)
      throw 'This is an empty tree!';

    let current = this.root;

    if(this.root.value === number){
      return true;
    }

    while(current !== null){

      if (number > current.value){
        if(current.right === null){
          break;
        }
        current = current.right;
      }

      if (number < current.value){
        if(current.left === null){
          break;
        }
        current = current.left;

      }

      if (number === current.value){
        return true;
      }

    }
    return false;
  }
  findMaximumValue(){
    if(this.root === null)
      throw 'This is an empty tree!';

    let max = 0;

    let traverse = (node) => {

      if(node.value > max){
        max = node.value;
      }
      // read left
      if(node.left) traverse(node.left);
      // read the root
      // read right
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }

  breadthFirst (){
    if(this.root === null)
      throw 'This is an empty tree!';

    let current = this.root;
    let result = [];

    let array = [current];

    while (array.length > 0) {
      let item = array.shift();
      let value = item.value;
      result.push(value);
      if (item.left === null && item.right === null) {
        continue;
      }
      if (item.left !== null) {
        array.push(item.left);
      }
      if (item.right !== null) {
        array.push(item.right);
      }
    }
    return result;
  }
}

module.exports= BinaryTree;
