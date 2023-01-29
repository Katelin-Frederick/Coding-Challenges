import validSudoku from './ValidSudoku'

test("Valid Sudoku", () => {
  expect(validSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ])).toBe(true)

  expect(validSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ])).toBe(false)

  expect(validSudoku([
    [".", "3", "2", "1", ".", "7", ".", ".", "6"],
    [".", "4", ".", ".", ".", "6", ".", ".", "."],
    ["1", "9", ".", ".", ".", "4", "7", ".", "3"],
    [".", "7", "8", "4", ".", ".", ".", "6", "2"],
    [".", ".", "9", "7", ".", "3", ".", "8", "5"],
    [".", ".", ".", ".", "2", ".", "3", ".", "4"],
    [".", ".", "4", "6", ".", "2", ".", ".", "1"],
    ["2", "5", ".", "8", ".", "1", "6", ".", "."],
    [".", "1", "3", ".", ".", "9", ".", "2", "."],
  ])).toBe(true)

  expect(validSudoku([
    ["3", "3", "2", "1", ".", "7", ".", ".", "6"],
    [".", "4", ".", ".", ".", "6", ".", ".", "."],
    ["1", "9", ".", ".", ".", "4", "7", ".", "3"],
    [".", "7", "8", "4", ".", ".", ".", "6", "2"],
    [".", ".", "9", "7", ".", "3", ".", "8", "5"],
    [".", ".", ".", ".", "2", ".", "3", ".", "4"],
    [".", ".", "4", "6", ".", "2", ".", ".", "1"],
    ["2", "5", ".", "8", ".", "1", "6", ".", "."],
    [".", "1", "3", ".", "2", "9", ".", "2", "."],
  ])).toBe(false)

  expect(validSudoku([
    ["5", ".", ".", "6", ".", ".", ".", ".", "."],
    ["8", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", "3", ".", ".", "5", "2", ".", ".", "4"],
    [".", ".", ".", "7", ".", ".", ".", ".", "1"],
    ["3", ".", ".", ".", "6", "1", "8", ".", "."],
    [".", "6", ".", "4", ".", ".", ".", ".", "."],
    [".", "5", ".", ".", "1", "3", ".", ".", "2"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", "2", ".", ".", ".", "4", ".", "."],
  ])).toBe(true)

  expect(validSudoku([
    ["5", ".", ".", "6", ".", ".", ".", ".", "."],
    ["8", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", "3", ".", ".", "5", "2", ".", ".", "4"],
    [".", ".", ".", "7", ".", ".", ".", ".", "1"],
    ["3", ".", ".", ".", "6", "1", "8", ".", "."],
    [".", "6", ".", "4", ".", ".", ".", ".", "."],
    [".", "5", ".", ".", "1", "3", ".", ".", "2"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", "2", ".", ".", ".", "4", "2", "."],
  ])).toBe(false)

  expect(validSudoku([
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])).toBe(true)
})