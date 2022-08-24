class User {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(this.name);
    }
}

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype))