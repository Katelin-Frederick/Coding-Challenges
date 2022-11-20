import balanceParentheses from './BalanceParentheses'

test("Balance Parentheses", () => {
  expect(balanceParentheses("()")).toBe(true)
  expect(balanceParentheses("()[]{}")).toBe(true)
  expect(balanceParentheses("(]")).toBe(false)
  expect(balanceParentheses("(])")).toBe(false)
})