import arrayChange from './ArrayChange'

test("Array Change", () => {
  expect(arrayChange([1, 1, 1])).toBe(3)
  expect(arrayChange([5, 7, 9])).toBe(0)
  expect(arrayChange([5, 9, 7])).toBe(3)
  expect(arrayChange([3, 2, 1])).toBe(6)
  expect(arrayChange([1, 2, 3])).toBe(0)
})