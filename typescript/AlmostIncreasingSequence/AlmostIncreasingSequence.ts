const almostIncreasingSequence = (sequence: number[]): boolean => {
  let count = 0

  for (let i = 0; i < sequence.length; i++) {
    if (count > 1) {
      break;
    }

    if (sequence[i] <= sequence[i - 1]) {
      count++

      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false
      }
    }
  }

  return count <= 1
}

export default almostIncreasingSequence