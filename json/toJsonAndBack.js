let user = {
  name : 'James', 
  age : 52
}

userStr = JSON.stringify(user);
console.log(userStr);
userJson = JSON.parse(userStr);
console.log(userJson);