let arr = [1,2,3,4];

function callBack(val){
  console.log(val);
}

console.log('before');
arr.forEach(callBack);
console.log('after');