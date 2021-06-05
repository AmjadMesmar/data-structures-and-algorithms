/* eslint-disable no-unused-vars */
'use strict';

const { default: lookup } = require('socket.io-client');
const Node = require('./node.js');

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
}

class BinarySearchTree extends BinaryTree{

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
}

module.exports = BinarySearchTree;
