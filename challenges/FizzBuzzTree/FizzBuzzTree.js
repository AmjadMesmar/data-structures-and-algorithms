/* eslint-disable no-unused-vars */

'use strict';

let Node = require('./node');

class K_aryTree {
  constructor(){
    this.root= null;

  }

  fizzBuzzTree () {
    if(!this.root)
      throw 'This is an empty tree!';

    const fizzBuzzTree = this;

    let traverseTree = (treeNode) => {

      if (treeNode.value%15===0)
        treeNode.value='FizzBuzz';

      else if(treeNode.value%5===0)
        treeNode.value='Buzz';

      else if(treeNode.value%3===0)
        treeNode.value= 'Fizz';

      else treeNode.value= `${treeNode.value}`;

      for (let i in treeNode.children) {
        traverseTree(treeNode.children[i]);
      }
    };

    traverseTree(fizzBuzzTree.root);
    return fizzBuzzTree;
  }

}

module.exports = K_aryTree;




