import arrayAnalyzer from "./analyzeArray"

test('array analyzer function test', () => { 
  const obj = {
    min : 1,
    max : 4,
    sum : 10,
    average : 2.5
  }
  expect(arrayAnalyzer([1,2,3,4])).toEqual(obj)
})