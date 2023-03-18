let id = Symbol('id');
let id2 = Symbol('id');

console.log(id === id2);

let user = {
  name: 'Josh',
  age: 12,
  [id]: 1
}

let userClone = Object.assign({}, user);

for (let key in user){
  console.log(key);
}

console.log(userClone);

let uiname = Symbol.for('key')
let anotherName = Symbol.for('key')

console.log(uiname === anotherName);

let sym = Symbol.for('name')
let sym2 = Symbol.for('id')

console.log( Symbol.keyFor(sym));
console.log( Symbol.keyFor(sym2));