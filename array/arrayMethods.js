let arr = ['apple', 'banana', 'cherry']
let copyArr = arr.slice();
let returnedData = arr.splice(2, 1, 'hello');

const arrayLike = {
  0 : false,
  length : 1,
}

const conArray = arr.concat(copyArr, arrayLike)

returnedData.splice(1, 0, arrayLike)

console.log(arr)
console.log(returnedData);
console.log(copyArr); 
console.log(conArray);

// forEach

arr = [1,2,3,4,5]

arr.forEach(i => console.log(i))

console.log(arr.includes(2))
console.log(arr.indexOf(4))

let arr2 = [NaN];
console.log(arr2.includes(NaN))
console.log(arr2.indexOf(NaN))

console.log('--------------------------------')

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name);

console.log('===================')

let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers);