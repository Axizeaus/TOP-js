let user = {
  name: 'John',
}

let admin = {
  name: 'admin',
}

function sayHi() {
  console.log( `Hello, my name is ${this.name}`)
}
user.func = sayHi;
admin.func = sayHi;

user.func()
admin.func()