function BigUser(){
  this.name = 'Mary';
  
  return { name : 'Godzilla' }
}

function SmallUser(){
  this.name = 'John';
  return;
}

console.log(new BigUser().name)
console.log(new SmallUser().name)