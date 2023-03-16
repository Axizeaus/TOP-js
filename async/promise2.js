const promise = doSomething();
const promise2 = promise.then(success, failure);

doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (result2) {
    return anotherOne(result2);
  })
  .then(function (final){
    return console.log('this is ' + final)
  })
  .catch(failure)