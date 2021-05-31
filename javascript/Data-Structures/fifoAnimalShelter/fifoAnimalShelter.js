
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
    this.values.push(value);//
  }

  dequeue(pref) {
    if(typeof pref !== 'string'){
      throw `Input shall be a string!`;
    }
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
