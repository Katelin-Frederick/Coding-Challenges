import alphabetSubSequence from './AlphabetSubSequence'

test("Alphabet Sub Sequence", () => {
  expect(alphabetSubSequence('effg')).toBe(false)
  expect(alphabetSubSequence('cdce')).toBe(false)
  expect(alphabetSubSequence('ace')).toBe(true)
  expect(alphabetSubSequence('bxz')).toBe(true)
  expect(alphabetSubSequence('zab')).toBe(false)
  expect(alphabetSubSequence('abcz')).toBe(true)
  expect(alphabetSubSequence('abzc')).toBe(false)
})