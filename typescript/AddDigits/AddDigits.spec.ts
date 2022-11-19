import addDigits from './AddDigits'

test("Add Digits", () => {
  expect(addDigits(29)).toBe(11)
  expect(addDigits(35)).toBe(8)
  expect(addDigits(63)).toBe(9)
  expect(addDigits(123)).toBe(6)
  expect(addDigits(475)).toBe(16)
  expect(addDigits(648)).toBe(18)
})