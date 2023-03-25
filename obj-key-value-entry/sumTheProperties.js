let salaries = {
  "John" : 100,
  "Pete" : 300,
  "Mary" : 200,
}

function sumSalaries(salaries){
  let arr = Object.entries(salaries)
    .map((entry) => entry[1])
    // .reduce((accumulator, value) => {
    //   accumulator + value;
    // }, 0);
  let sum = arr.reduce((accumulator, value) => accumulator + value, 0)
  return sum
}

console.log(sumSalaries(salaries));