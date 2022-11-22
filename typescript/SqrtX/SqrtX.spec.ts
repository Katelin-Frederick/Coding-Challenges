import sqrtX from './SqrtX'

test("Sqrt(x)", () => {
  expect(sqrtX(4)).toBe(2)
  expect(sqrtX(8)).toBe(2)
  expect(sqrtX(25)).toBe(5)
  expect(sqrtX(16)).toBe(4)
  expect(sqrtX(9)).toBe(3)
  expect(sqrtX(10)).toBe(3)
  expect(sqrtX(50)).toBe(7)
  expect(sqrtX(6)).toBe(2)
  expect(sqrtX(7)).toBe(2)
  expect(sqrtX(12)).toBe(3)
})