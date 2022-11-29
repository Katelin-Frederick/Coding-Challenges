import areSimilar from './AreSimilar'

test("Are Similar", () => {
  expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true)
  expect(areSimilar([1, 2, 3], [2, 1, 3])).toBe(true)
  expect(areSimilar([1, 2, 2], [2, 1, 1])).toBe(false)
  expect(areSimilar([1, 2, 3, 4], [1, 2, 3])).toBe(false)
  expect(areSimilar([5, 4, 3, 2, 1], [5, 3, 4, 2, 1])).toBe(true)
  expect(areSimilar([5, 4, 3, 1, 2], [5, 3, 4, 2, 1])).toBe(false)
  expect(areSimilar([1, 2, 3, 4], [5, 6, 7, 8])).toBe(false)
})