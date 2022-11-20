import adjacentElementsProduct from './AdjacentElementsProduct'

test("Add Digits", () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21)
  expect(adjacentElementsProduct([6, 8, 1, 7, 6, 5, 2])).toBe(48)
  expect(adjacentElementsProduct([9, 4, 3, 2, 8, 7, 3])).toBe(56)
})