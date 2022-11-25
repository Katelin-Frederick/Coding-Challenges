import alternatingSums from './AlternatingSums'

test("Alternating Sums", () => {
  expect(alternatingSums([50, 60, 60, 45, 70])).toStrictEqual([180, 105])
  expect(alternatingSums([4, 7, 1, 6, 9, 1, 8])).toStrictEqual([22, 14])
  expect(alternatingSums([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([25, 20])
})