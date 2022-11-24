import almostIncreasingSequence from './AlmostIncreasingSequence'

test("Almost Increasing Sequence", () => {
  expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false)
  expect(almostIncreasingSequence([1, 3, 2])).toBe(true)
  expect(almostIncreasingSequence([1, 3, 1, 2])).toBe(false)
  expect(almostIncreasingSequence([1, 3, 1, 1])).toBe(false)
  expect(almostIncreasingSequence([1, 30, 10, 20])).toBe(true)
  expect(almostIncreasingSequence([1, 25, 10, 26, 31, 32])).toBe(true)
  expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toBe(true)
  expect(almostIncreasingSequence([1, 1, 1, 2, 3, 4, 5])).toBe(false)
})