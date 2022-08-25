class Animal {
  speak() {
    return this + ' animal speak called';
  }
  static eat() {
    return this + ' animal eat called';
  }
}

const obj = new Animal();

const speak = obj.speak;
console.log('1'+obj.speak());
console.log('2'+speak());


const eat = Animal.eat;
console.log('3'+Animal.eat());
console.log('4'+eat());
