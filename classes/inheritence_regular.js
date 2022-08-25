class Animal {
    speak(){
        console.log(this.name + ' makes a noise');
    }
};

// class Dog extends Animal{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

class Cat {
    constructor(name) {
      this.name = name;
    }
}

// const d = new Dog('bobby');

Object.setPrototypeOf(Cat.prototype, Animal);

const c = new Cat('Noir');
c.speak();
// d.speak();