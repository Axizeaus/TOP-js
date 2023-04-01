function arrProduct(arr, total = 1){
  if (arr.length === 0){
    return total
  }
  let last = arr.pop();
  total *= last;
  return arrProduct(arr, total);
  
}

console.log(arrProduct([1,2,3,4,5]))