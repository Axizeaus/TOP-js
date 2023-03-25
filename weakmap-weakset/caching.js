let cache = new WeakMap();

function process(obj){
  if (!cache.has(obj)){
    let result = /* calc the result for */obj;
    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

let obj = {}

let result1 = process(obj);
let result2 = process(obj);

obj = null;

console.log(result1)
console.log(result2);

console.log(cache.size); // not gonna work