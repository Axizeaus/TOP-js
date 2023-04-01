function calcFact(n){
  return (n === 1) ? 1 : n * calcFact(n-1);
}

console.log(calcFact(77))