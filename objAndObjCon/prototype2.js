let user = {
    name: "John",
    surname: "Smith",

    set setFullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get getFullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.getFullName);

admin.setFullName = 'Alice Cooper';

console.log(admin.getFullName); // Alice Cooper, state of admin modified
console.log(user.getFullName); // John Smith, state of user protected