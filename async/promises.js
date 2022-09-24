'use strict'

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('json data');
  }, 1000);

  setTimeout(() => {
    reject('no json data')
  }, 500);
});

// myPromise
// .then((resolve) => {
//   console.log(resolve); 
// })
// .catch((err) => {
//   console.log(err);
// })

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2 - resolving')
  }, 1000);
  setTimeout(() => {
    reject('promise2 - rejected')
  }, 499)
})

Promise.all([myPromise2, myPromise])
      .then((data) => {
        data.forEach(element => {
          console.log(element);
        });
      })
      .catch((err) => {
        console.log(err);
      })