function User(){
  console.log(new.target);
}

User(); // returns undefined

new User(); // returns [Function: User]