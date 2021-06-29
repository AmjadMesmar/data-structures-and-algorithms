'use strict';
const {HashTable} = require('../hashtable/hashtable');
const {leftJoin} = require('../hashmap-left-join/hashmap-left-join');

describe('Left JOINs Test',() => {

  it('Shall successfully join Hashleft table with right Hashtable',() => {

    let leftHashTable = new HashTable(105);


    leftHashTable.add('Pirate_King','Gol D. Roger');
    leftHashTable.add('Straw_Hats','Roronoa Zoro');
    leftHashTable.add('Admiral','Akainu');
    leftHashTable.add('Yonko','Edward Newgate');


    let rightHashTable = new HashTable(105);

    rightHashTable.add('Straw_Hats','Monkey D. Luffy');
    rightHashTable.add('Admiral','Aokiji');
    rightHashTable.add('Yonko','Red-haird Shanks');
    rightHashTable.add('Shichibukai','Dracule Mihawk');


    expect(leftJoin(leftHashTable,rightHashTable)).toEqual([['Yonko', 'Edward Newgate', 'Red-haird Shanks'], ['Straw_Hats', 'Roronoa Zoro', 'Monkey D. Luffy'], ['Admiral', 'Akainu', 'Aokiji'], ['Pirate_King', 'Gol D. Roger', 'NULL']]);
    expect(leftJoin(rightHashTable,leftHashTable)).toEqual([['Yonko', 'Red-haird Shanks', 'Edward Newgate'], ['Shichibukai', 'Dracule Mihawk', 'NULL'], ['Straw_Hats', 'Monkey D. Luffy', 'Roronoa Zoro'], ['Admiral', 'Aokiji', 'Akainu']]);
  });

  it('Shall successfully throws an exceptiomn if any of the inputs is a non hashTable',() => {

    expect(() => leftJoin(1,'string').toThrow('Inputs shall be hashtables!'));

  });

  it('Shall successfully throws an exceptiomn if any of the inputs is a null',() => {

    expect(() => leftJoin(1,'string').toThrow('Inputs shall be hashtables!'));

  });



});
