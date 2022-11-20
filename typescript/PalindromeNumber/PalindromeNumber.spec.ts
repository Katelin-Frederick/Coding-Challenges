import palindromeNumber from './PalindromeNumber'

test("Palindrome Number", () => {
  expect(palindromeNumber(121)).toBe(true)
  expect(palindromeNumber(-121)).toBe(false)
  expect(palindromeNumber(10)).toBe(false)
})