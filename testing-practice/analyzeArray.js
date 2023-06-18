export default function arrayAnalyzer(arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((prev, curr) => prev + curr, 0)
  let average = sum / arr.length ;

  return ({
    min, max, sum, average
  })
}

console.log(arrayAnalyzer([1,2,3,4]))