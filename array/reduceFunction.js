let arr = [1,2,3,4,5]

console.log(arr.reduce((sum, value) => sum + value, 0))

console.log(arr.reduce((sum, value) => sum + value))

console.log(arr.reduceRight((sum, value) => sum + value, 0))