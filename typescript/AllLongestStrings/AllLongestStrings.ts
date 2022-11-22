const allLongestStrings = (inputArray: string[]): string[] => {
  let count = 0
  let longestStrings: string[] = []

  inputArray.forEach((item) => {
    if (item.length > count) {
      count = item.length

      longestStrings = [item]
    } else if (item.length === count) {
      longestStrings.push(item)
    }
  })

  return longestStrings
}

export default allLongestStrings