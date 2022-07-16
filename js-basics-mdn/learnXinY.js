console.log(null == undefined);

let arr = ['hello', 1, undefined]
console.log(arr)
arr.push('world');
arr[2]
console.log(arr.length)


arr.unshift(3)
console.log(arr)
let avari= arr.shift()
console.log(avari)
console.log(arr)

var1 = arr.shift()
var2 = arr.pop()
console.log(var1, var2, arr);

let arr2 = [32,false,"js",12,56,90];
let st = arr2.join('--');
console.log(st);

console.log(arr2);
console.log(arr2.slice(1,4));
console.log(arr2);
console.log(arr2.splice(2,4,"hi","wr","ld"))