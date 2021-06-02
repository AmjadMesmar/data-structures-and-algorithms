class Animal {
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
}
class AnimalShelter {//FIFO
  constructor() {
    this.values = new Array();
  }

  enqueue(value) {
    if(value.type !== 'cat' && value.type !== 'dog')
      throw 'Can only enqueue a cat or a dog!';
    this.values.push(value);//
  }

  dequeue(pref) {
    if(typeof pref !== 'string'){
      throw `Input shall be a string!`;
    }

    if(pref !== 'cat' && pref !== 'dog'){
      let choosen = this.values[0];
      this.values.splice(0,1);
      return choosen; }

    let arr = this.values;

    if((pref === 'cat')|| (pref === 'dog')) {
      for(let i in arr){

        if(pref === arr[i].type)
        {
          let choosen = arr[i];
          this.values.splice(i,1);
          return choosen;
        }

      }
    }
    let choosen = arr[0];
    this.values.splice(0,1);
    return choosen;
  }
}


module.exports = {Animal,AnimalShelter};
