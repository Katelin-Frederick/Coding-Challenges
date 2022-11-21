import romanToInteger from './RomanToInteger'

test("Roman To Integer", () => {
  expect(romanToInteger('III')).toBe(3)
  expect(romanToInteger('LVIII')).toBe(58)
  expect(romanToInteger('MCMXCIV')).toBe(1994)
})