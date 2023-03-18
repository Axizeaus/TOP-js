let globalSymbol = Symbol.for('name');
let localSymbol = Symbol('name');

console.log(Symbol.keyFor(globalSymbol));//name
console.log(Symbol.keyFor(localSymbol));//undefined

console.log(globalSymbol.description);//name
console.log(localSymbol.description);//name
