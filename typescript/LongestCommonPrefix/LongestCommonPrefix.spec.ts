import longestCommonPrefix from './LongestCommonPrefix'

test("Longest Common Prefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe('fl')
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('')
  expect(longestCommonPrefix(["star", "stage", "state", "staff"])).toBe('sta')
})