let arr = ['apple', 'orange', 'banana', 'pear', 'pineapple'];
let [firstItem, secondItem, ...otherItems] = arr

console.log(firstItem, secondItem, otherItems);

let [favouriteFruit = 'anything sweet'] = arr

let [defaultTest = 'this is working'] = []
console.log(favouriteFruit);
console.log(defaultTest);

let [evenFunctions = askIfWorking] = new Set();
console.log(evenFunctions);

function askIfWorking(){
  return prompt('is this working?');
}