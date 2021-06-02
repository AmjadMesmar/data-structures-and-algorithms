/* eslint-disable no-unused-vars */
'use strict';

let AS  = require ('../fifoAnimalShelter/fifoAnimalShelter.js');

describe('Animal class Test', () => {
  it('Can successfully create Animal object', () => {

    // arrange
    let test = new AS.Animal('Cooky','cat');

    // act

    // assert
    expect(test.name).toEqual('Cooky');
    expect(test.type).toEqual('cat');

  });
});

describe('AnimalShelter class Test', () => {
  it('Can successfully create AnimalShelter object', () => {

    // arrange
    let test = new AS.AnimalShelter();

    // act

    // assert
    expect(test.values).toEqual([]);
    expect(test.values.length).toEqual(0);


  });

  it('Will throw an exception if object is not a cat or a dog', () => {

    // arrange
    let test = new AS.AnimalShelter();
    let animal = new AS.Animal('Apolo','Hamster');
    // act

    // assert
    expect(() => test.enqueue(animal)).toThrow('Can only enqueue a cat or a dog!');


  });

  it('Can successfully enqueue a new Animal object', () => {

    // arrange
    let animal = new AS.Animal('Cooky','cat');
    let test = new AS.AnimalShelter();

    // act

    test.enqueue(animal);

    // assert
    expect(test.values).toEqual([{name:'Cooky',type:'cat'}]);
    expect(test.values.length).toEqual(1);


  });

  it('Can successfully enqueue a multiple Animal objects', () => {

    // arrange
    let animal = new AS.Animal('Cooky','cat');
    let animal4 = new AS.Animal('Sushi','cat');
    let animal2 = new AS.Animal('Fido','dog');
    let animal3 = new AS.Animal('Maxie','cat');

    let test = new AS.AnimalShelter();

    // act

    test.enqueue(animal);
    test.enqueue(animal4);
    test.enqueue(animal2);
    test.enqueue(animal3);

    // assert

    // expect(test.values[0]).toEqual({name:'Cooky',type:'cat'});
    // expect(test.values[1]).toEqual({name:'Fido',type:'dog'});
    // expect(test.values[2]).toEqual({name:'Maxie',type:'cat'});

    expect(test.dequeue('cat')).toEqual({name:'Cooky',type:'cat'});
    expect(test.dequeue('cat')).toEqual({name:'Sushi',type:'cat'});
    console.log('test ', test);

    // expect(test.values.length).toEqual(3);


  });

  it('Will throw an exception if dequeue input was not string', () => {

    // arrange
    let animal = new AS.Animal('Cooky','cat');
    let animal2 = new AS.Animal('Fido','dog');
    let animal3 = new AS.Animal('Maxie','cat');

    let test = new AS.AnimalShelter();

    // act

    test.enqueue(animal);
    test.enqueue(animal2);
    test.enqueue(animal3);

    // assert

    expect(()=> test.dequeue(1)).toThrow('Input shall be a string!');
  });

  it('Will successfully return pref if dequeue input was dog or cat', () => {

    // arrange
    let animal = new AS.Animal('Cooky','cat');
    let animal2 = new AS.Animal('Fido','dog');
    let animal3 = new AS.Animal('Maxie','cat');

    let test = new AS.AnimalShelter();

    // act

    test.enqueue(animal);
    test.enqueue(animal2);
    test.enqueue(animal3);

    // assert

    expect(test.dequeue('cat')).toEqual({'name': 'Cooky', 'type': 'cat'}
    );
  });

  it('Will successfully return the first animal in shelter if dequeue input is not dog or cat', () => {

    // arrange
    let animal = new AS.Animal('Cooky','cat');
    let animal2 = new AS.Animal('Fido','dog');
    let animal3 = new AS.Animal('Maxie','cat');

    let test = new AS.AnimalShelter();

    // act

    test.enqueue(animal);
    test.enqueue(animal2);
    test.enqueue(animal3);

    // assert

    expect(test.dequeue('Zebra')).toEqual({'name': 'Cooky', 'type': 'cat'});
  });

});
