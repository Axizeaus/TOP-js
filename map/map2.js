let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map.get("1"));

let obj = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj));

console.log(map2);

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

console.log(prices);