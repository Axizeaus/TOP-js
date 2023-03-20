let promise = new Promise(function(resolve, reject) {
  // setTimeout(resolve('done'), 1000);
  let number = (Math.random()* 10).toFixed();
  console.log(number);
  if (number < 5){
    resolve("It's less than 5")
  }
  reject("It's more than or equal to 5.")
});

promise
  .finally(() => console.log("finally one ... "))
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally two... "));