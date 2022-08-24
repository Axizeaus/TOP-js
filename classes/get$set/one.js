let user = {
  name: "john",
  surname: "smith",
};

// user is obj, followed by the prop which is followed by an object of get and set for that prop.
Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user.fullName);

for (let key in user){
    console.log(key);
}