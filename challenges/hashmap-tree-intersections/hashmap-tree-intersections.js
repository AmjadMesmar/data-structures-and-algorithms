/* eslint-disable no-unused-vars */
'use strict';

const Node = require('../../javascript/Data-Structures/tree/node');
const {BinaryTree} = require('../../javascript/Data-Structures/tree/tree');

function treeIntersection(binaryTree1, binaryTree2) {

  if((!binaryTree1) || (!binaryTree2)){
    throw 'Inputs shall be only 2 binary trees!';
  }
  if((!binaryTree1.root) || (!binaryTree2.root)){
    throw 'Inputs shall be only 2 binary trees!';
  }

  let binaryTreeArray1 = binaryTree1.preOrder();
  let binaryTreeArray2 = binaryTree2.preOrder();
  let results = [];

  for(let i = 0; i < binaryTreeArray1.length; i++){
    if(binaryTreeArray2.includes(binaryTreeArray1[i])){
      results.push(binaryTreeArray1[i]);
    }
  }
  return results;
}

module.exports = {treeIntersection,BinaryTree,Node};
