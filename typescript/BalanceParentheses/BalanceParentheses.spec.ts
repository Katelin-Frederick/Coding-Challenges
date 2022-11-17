import balanceParentheses from './BalanceParentheses'

test("Alphabet Soup", () => {
  expect(balanceParentheses("()")).toBe(true)
  expect(balanceParentheses("()[]{}")).toBe(true)
  expect(balanceParentheses("(]")).toBe(false)
  expect(balanceParentheses("(])")).toBe(false)
})