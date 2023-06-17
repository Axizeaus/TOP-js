import reverse from "./reverseStr";

test('reverse a given string', () => {
  expect(reverse('reverse this')).toBe('siht esrever')
})

test('reverse a num str', ()=> {
  expect(reverse('123456789')).toBe('987654321')
})