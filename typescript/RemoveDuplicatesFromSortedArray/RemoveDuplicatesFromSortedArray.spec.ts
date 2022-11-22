import removeDuplicatesFromSortedArray from './RemoveDuplicatesFromSortedArray'

test("Remove Duplicates From Sorted Array", () => {
  expect(removeDuplicatesFromSortedArray([1, 1, 2])).toBe(2)
  expect(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  expect(removeDuplicatesFromSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(10)
})