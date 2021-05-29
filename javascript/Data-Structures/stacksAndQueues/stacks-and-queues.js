/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */

'use strict';

const Node = require('../linked-list/node.js');

class Stack {//LIFO
  constructor() {
    this.top = null;
    // this.values = new Array();
  }

  push(value) {

    const node = new Node(value);
    node.next = this.top;
    this.top = node;

    return this;
  }

  pop() {
    if(!this.top){
      throw 'can not pop from empty stack!';
    }
    let node = this.top.next;
    this.top = node;

    return this;
  }

  peek() {
    if(!this.top){
      throw 'This is an empty stack';
    }
    return this.top.value;
  }

  isEmpty(){
    if(!this.top){
      return true;
    }
    else return false;
  }
}

class Queue {//FIFO
  constructor() {
    this.front= null;
    this.back= null;
  }

  enqueue(value) {

    const node = new Node(value);

    if(!this.front){
      this.front = node;
      this.back = node;
    }
    else {
      node.next = this.back;
      this.back = node;
    }
  }

  dequeue() {

    if(!this.back){
      throw 'Cant dequeue from an empty queue!';
    }

    let node = this.back;

    if(this.back === this.front){
      this.front= null;
      this.back = null;
    }
    else{

      while(node.next){
        if(node.next === this.front){
          break;
        }
        node = node.next;
      }
      node.next= null;
      this.front = node;
    }
  }

  peek() {
    if(!this.back){
      throw 'Cant find peek of an empty queue!';
    }
    return this.front.value;
  }

  isEmpty(){
    if(!this.back){
      return true;
    }
    return false;
  }
}

module.exports = {Stack,Queue};


