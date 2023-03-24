let map = new Map();

map.set('1', 'str one');
map.set(1, 'num one');

console.log(map.get(1), map.get('1'))

let john = { name : 'John' }

let visitCountMap = new Map();

visitCountMap.set(john, 124);

console.log(visitCountMap);

map.set('chain1', 'chain one')
.set('chain2', 'chain two');

console.log(map);

for (let key of [map.keys(), map.values()]){
  console.log(key);
}

map.forEach((value, key) => {
  console.log(value, key)
})