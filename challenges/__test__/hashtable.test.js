'use strict';
const {HashTable} = require('../hashtable/hashtable');

describe('HashTable',() => {

  it('Adding a key/value to your hashtable results in the value being in the data structure',() => {

    let hashTable = new HashTable(1021);
    hashTable.add('Amjad','Full-Stack');

    expect(hashTable.contains('Amjad')).toEqual(true);
  });

  it('Retrieving based on a key returns the value stored',() => {

    let hashTable = new HashTable(1021);
    hashTable.add('Amjad','Full-Stack');

    expect(hashTable.get('Amjad')).toEqual([{'Amjad': 'Full-Stack'}]);
  });

  it('Successfully returns null for a key that does not exist in the hashtable',() => {

    let hashTable = new HashTable (1021);
    hashTable.add('Amjad','Full-Stack');

    expect(hashTable.get('Ahmad')).toEqual(null);

  });

  it('Successfully handle a collision within the hashtable',() => {

    let hashTable = new HashTable (1021);
    hashTable.add('melon','Sweet');
    hashTable.add('lemon','Sour');

    expect(hashTable.get('melon')).toEqual([{'melon': 'Sweet'}, {'lemon': 'Sour'}]);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',() => {

    let hashTable = new HashTable (1021);
    hashTable.add('melon','Sweet');
    hashTable.add('lemon','Sour');

    expect(hashTable.getOne('lemon')).toEqual({'lemon': 'Sour'});
  });

  it('Successfully hash a key to an in-range value',() => {

    let hashTable = new HashTable (1021);

    expect(hashTable.hash('melon')).toEqual(225);
  });

});
