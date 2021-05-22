/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
// head
// tail --
// length --

'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  
  add(value) {
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

  addNewHead(value) {
    let newNode = new Node(value);
    try {
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    catch (error){
      console.error('Ann error occured: ', error);
    }
  }

  insert (value){
    try {
      this.head.value = new Node(value);
    }
    catch (error){
      console.error('Ann error occured: ', error);
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

  toString() {
    let head = this.head;
    let result = [];
    try {
      while(head) {
        result.push(' { ');
        result.push(head.value);
        result.push(' } ');
        result.push(' -> ');
        head = head.next;
      }

      result.push('NULL');
      return result.join('');
    }
    catch (error){
      console.error('Ann error occured: ', error);
    }
  }
}

module.exports = LinkedList;
