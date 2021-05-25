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

  appendNewHead(value) {
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
  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while ((current) && (current.value !== value)) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current;
      if (current === this.head) {
        this.head = newNode;
      } else {
        previous.next = newNode;
      }
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while ((current) && (current.value !== value)) {
      current = current.next;
    }
    if (!current) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  calcLength() {

    let current = this.head;
    let count = 0;

    while (current)
    {
      current = current.next;
      count++;
    }

    return count;

  }

  kthFromEnd(k) {

    let current = this.head;
    let length = 0;

    if (k < 0) {
      throw `Can't accept a  negative number`;
    }

    let checkLength = this.calcLength();

    if (k >= checkLength) {
      throw `The number is bigger than the length of the linked list`;
    }

    let numFind = checkLength-k;

    while (current) {
      length++;
      if (length === numFind) {
        return current.value;
      }
      current = current.next;
    }
    throw `The linked list is shorter than ${numFind} nodes.`;
  }
}

module.exports = LinkedList;


