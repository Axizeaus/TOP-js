let User = class{
    sayHi() {
        console.log('hello');
    }
}

let walk = function() {
    console.log('walking...');
}

const user = new User();
console.log(user.sayHi);
walk();

let Person = class Animal{
    breath(){
        console.log(Animal);
    }
}

new Person().breath();
// console.log(Animal);