import arrayConversion from './ArrayConversion'

test("Array Conversion", () => {
  expect(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])).toBe(186)
  expect(arrayConversion([8, 7, 6, 5, 4, 3, 2, 1])).toBe(186)
  expect(arrayConversion([1, 3, 5, 7, 8, 6, 4, 2])).toBe(132)
  expect(arrayConversion([10, 20, 30, 40, 50, 60, 70, 80])).toBe(18600)
  expect(arrayConversion([15, 7, 12, 8, 21, 4, 9, 30])).toBe(1415)
})