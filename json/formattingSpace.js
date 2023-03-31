let user = {
  name : "James",
  age : 25,
  roles : {
    isAdmin : false,
    isEditor : true
  }
};

console.log(JSON.stringify(user, null, '--'))