let arrayLike = {
  0: 'sugar',
  1: 'coffee', 
  length: 2
}

console.log(Array.isArray(arrayLike))
console.log(arrayLike);
let arr = Array.from(arrayLike)
console.log(Array.isArray(arr));
console.log(arr);