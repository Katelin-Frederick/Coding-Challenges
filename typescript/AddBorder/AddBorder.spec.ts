import addBorder from './AddBorder'

test("Add Border", () => {
  expect(addBorder(['abc', 'def'])).toStrictEqual(['*****', '*abc*', '*def*', '*****'])
  expect(addBorder(['abcd', 'efgh'])).toStrictEqual(['******', '*abcd*', '*efgh*', '******'])
  expect(addBorder(['efgh', 'abcd'])).toStrictEqual(['******', '*efgh*', '*abcd*', '******'])
  expect(addBorder(['abc', 'def', 'ghi'])).toStrictEqual(['*****', '*abc*', '*def*', '*ghi*', '*****'])
  expect(addBorder(['abcd', 'efgh', 'ijkl'])).toStrictEqual(['******', '*abcd*', '*efgh*', '*ijkl*', '******'])
  expect(addBorder(['abcde', 'fgh', 'ijklmn'])).toStrictEqual(['********', '*abcde**', '*fgh****', '*ijklmn*', '********'])
  expect(addBorder(['ijklmn', 'fgh', 'abcde'])).toStrictEqual(['********', '*ijklmn*', '*fgh****', '*abcde**', '********'])
  expect(addBorder(['bronze', 'picture', 'green', 'gold', 'extinct'])).toStrictEqual(['*********', '*bronze**', '*picture*', '*green***', '*gold****', '*extinct*', '*********'])
})