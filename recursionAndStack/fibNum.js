// function fibNum(n){
//   return (n <= 1) ? n : fibNum(n-1) + fibNum(n-2)
// } 

// console.log(fibNum(77))

// recursion approach takes too long for big numbers.

function fibNum(n){
  if (n === 1 || n === 2){
    return 1
  } 
  let [a, b] = [1, 1];
  // i starts from 3 cuz 1 and 2 are already cleared out
  // <= cuz we run till n (inclusive);
  for (let i = 3; i <= n; i++){
    [a,b] = [b, (a+b)];
  }
  return b;
}

console.log(fibNum(77));