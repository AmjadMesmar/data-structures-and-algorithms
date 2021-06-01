/* eslint-disable no-unused-vars */
'use strict';

function isValid (str) {

  if(typeof str !== 'string' || str.length === 0){
    throw 'Input is not a string!';
  }

  let array = [];

  for (let i = 0; i < str.length; i ++) {
    let char = array[array.length-1];

    if ((str[i] === '(') || (str[i] === '{') || (str[i] === '['))

    {
      array.push(str[i]);
    }

    else if ((char === '(') && (str[i] === ')') || (char === '{') && (str[i] === '}') || (char === '[') && (str[i] === ']'))
    {
      array.pop();
    }

    else if((str[i]===')') && (char!=='(') || (str[i]==='}') && (char!=='{') || (str[i]===']') && (char!=='['))
    {
      return false ;
    }
  }
  return array.length ? false : true;
}

module.exports= isValid;
