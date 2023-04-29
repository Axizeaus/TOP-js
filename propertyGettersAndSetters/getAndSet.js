let user = {
  name : 'John',
  lastName : 'Smith',

  get fullName() {
    return `${this.name} ${this.lastName}`
  },

  set fullName(value) {
    [this.name , this.lastName] = value.split(' ');
  },
}

console.log(user.fullName);
user.fullName = 'Kyaw Zaw'
console.log(user.fullName);