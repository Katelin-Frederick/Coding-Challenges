const arrayChange = (inputArr: number[]): number => {
  let count = 0

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= inputArr[i + 1]) {
      const difference = inputArr[i] - inputArr[i + 1] + 1
      count += difference

      inputArr[i + 1] = inputArr[i] + 1
    }
  }

  return count
}

export default arrayChange