let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, 'this is working');

try{
  weakMap.set('test', 'Welp');
} catch (TypeError){
  console.log('nope');
}