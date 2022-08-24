function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User("John", new Date(year=2001, month=1));

console.log(john.birthday);
console.log(john.age);
console.log(john);

thisYear = new Date().getFullYear();
console.log(thisYear);
