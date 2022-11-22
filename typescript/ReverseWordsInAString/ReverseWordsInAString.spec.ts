import reverseWordsInAString from './ReverseWordsInAString'

test("Reverse Words In A String", () => {
  expect(reverseWordsInAString('the sky is blue')).toBe('blue is sky the')
  expect(reverseWordsInAString('  hello world  ')).toBe('world hello')
  expect(reverseWordsInAString('a good   example')).toBe('example good a')
})