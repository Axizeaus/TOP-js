function User(name){
  if (!new.target){
    return new User(name)
  }
  this.name = name

  console.log(this.name);
}

let john = new User('John');
let mary = User('Mary');