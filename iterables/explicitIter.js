let str = 'hello there';

let iterator = str[Symbol.iterator]();

while(true){
  let result = iterator.next();
  
  if (result.done) break;
  console.log(result.value);

}