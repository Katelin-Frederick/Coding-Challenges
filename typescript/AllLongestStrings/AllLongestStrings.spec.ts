import allLongestStrings from './AllLongestStrings'

test("All Longest Strings", () => {
  expect(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba'])).toStrictEqual(['aba', 'vcd', 'aba'])
  expect(allLongestStrings(['zyz', 'zz', 'zw', 'wkx', 'zyz'])).toStrictEqual(['zyz', 'wkx', 'zyz'])
  expect(allLongestStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  expect(allLongestStrings(['a', 'b', 'c', 'd', 'e', 'f', 'gh'])).toStrictEqual(['gh'])
  expect(allLongestStrings(['kshd', 'hshe', 'es', 'end', 'losp', 'whd', 'ldns'])).toStrictEqual(['kshd', 'hshe', 'losp', 'ldns'])
})