let numbers = [1,2,3,4,5]
let numStr = JSON.stringify(numbers);

console.log(typeof numStr);
console.log(JSON.parse(numStr))