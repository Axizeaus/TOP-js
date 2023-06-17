let Calculator = require('./calc')

test('add function', () => {
  expect(Calculator.add(1, 2)).toBe(3)
})

test('sub function', () => {
  expect(Calculator.sub(1, 2)).toBe(-1)
})

test('multiply function', () => {
  expect(Calculator.multiply(2, 0)).toBe(0)
})

test('divide function', () => {
  expect(Calculator.divide(2,1)).toBe(2);
})

test('divide by zero', () => {
  expect(() => Calculator.divide(100, 0)).toThrow("divided by zero error");
})