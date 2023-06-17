const capitalizeStr = require('./capitatizeStr')

test('returns the capitalized str', () => {
  expect(capitalizeStr('this')).toBe('This');
})

test('return the capitalized sentence', () => {
  expect(capitalizeStr('is this working')).toBe('Is This Working')
})

test('checks if it will works if the first char is a space', () => {
  expect(capitalizeStr(' how about now')).toBe(' How About Now')
})