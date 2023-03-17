function User(name){
  this.name = name;

  this.sayHi = function() {
    console.log('name is ' + this.name)
  }
}

let james = new User("James")

james.sayHi()