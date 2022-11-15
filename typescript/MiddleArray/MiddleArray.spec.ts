import middleArray from './MiddleArray'

test("Middle Array", () => {
  expect(middleArray([2, 4, 7])).toBe(4)
  expect(middleArray([2, 4, 7, 6])).toBe(4)
  expect(middleArray([1, 2, 3, 4, 5])).toBe(3)
  expect(middleArray([5, 8, 6, 4, 9, 8])).toBe(6)
})