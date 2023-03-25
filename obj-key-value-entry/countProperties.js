let user = {
  name : 'john', 
  age : 30
}

function count(user){
  return Object.keys(user).length
}

console.log(count(user))