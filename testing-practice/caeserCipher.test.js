import caeser from "./caeserCipher";

test('testing caeser cipher funtion', () => {
  expect(caeser("Is This Working", 3)).toBe("Lv Wklv Zrunlqj");
})

test('testing caeser function with negative number', () => {
  expect(
    caeser("I hope this Works Too...", -5)).toBe("D cjkz ocdn Rjmfn Ojj...")
  ;
})