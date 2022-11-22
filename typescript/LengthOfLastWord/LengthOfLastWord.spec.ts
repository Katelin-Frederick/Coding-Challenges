import lengthOfLastWord from './LengthOfLastWord'

test("Length Of Last Word", () => {
  expect(lengthOfLastWord('Hello World')).toBe(5)
  expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4)
  expect(lengthOfLastWord('luffy is still joyboy')).toBe(6)
})