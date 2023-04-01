let seven = countInts([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);

function countInts(arr){
  if (arr.length === 0) return 0;

  let total = 0;
  let last = arr.pop();
  if (Array.isArray(arr)){
    total += countInts(last);
  } else if (Number.isInteger(last)){
    total += 1
  }

  return total + countInts(arr);
}