function fibs(n){
  let arr = [0, 1];
  if (n === 0){
    return []
  } 
  if (n === 1){
    return [0]
  }
  if (n === 2){
    return [0,1]
  }
  let [a,b] = [0,1]
  for ( let i = 3; i <= n; i++){
    [a,b] = [b, a+b];
    arr.push(b);
  }
  return arr;
}

function fibsRec(n){
  return (n <= 1) ? n : fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibsRec(0))
console.log(fibsRec(1))
console.log(fibsRec(10))