/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
'use strict';

const Node = require('../linked-list/node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    try {
      if (!this.head) {// empty linked list
        this.head = node;
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = node;
      }
    }
    catch (error){
      console.error('Ann error occured: ', error);
    }

  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    let previousNode;
    while ((currentNode) && (currentNode.value !== value)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = currentNode;
      if (currentNode === this.head) {
        this.head = newNode;
      } else {
        previousNode.next = newNode;
      }
    }
  }

  insertAfter(value, newVal) {

    let currentNode = this.head;
    while ((currentNode) && (currentNode.value !== value)) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  include (value){

    let check = false;
    let checkNode = this.head;
    try {
      while(checkNode){
        if (checkNode.value === value){
          check = true;
          console.log('Does value exist? ',check);
          return check;
        }
        checkNode = checkNode.next;
      }
      console.log('Does value exist? ',check);
      return check;
    }
    catch (error){
      console.error('Ann error occured: ', error);
    }
  }

}

module.exports = LinkedList;
