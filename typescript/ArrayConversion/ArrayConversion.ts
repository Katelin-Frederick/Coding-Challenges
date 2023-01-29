/****** RECURSIVE ******/
const arrayConversion = (inputArray: number[], iteration = 1): any => {
  if (inputArray.length === 1) {
    return inputArray[0]
  }

  const tempArr = []

  for (let i = 0; i < inputArray.length; i += 2) {
    iteration % 2 === 0
      ? tempArr.push(inputArray[i] * inputArray[i + 1])
      : tempArr.push(inputArray[i] + inputArray[i + 1])
  }

  return arrayConversion(tempArr, ++iteration)
}

export default arrayConversion

/****** NON RECURSIVE ******/
// const reduce = (nums: number[], iteration: number): number[] => {
//   const finalArr = []

//   for (let i = 0; i < nums.length; i += 2) {
//     if (iteration % 2 === 0) {
//       finalArr.push(nums[i] * nums[i + 1])
//     } else {
//       finalArr.push(nums[i] + nums[i + 1])
//     }
//   }

//   return finalArr
// }

// const arrayConversion = (inputArray: number[]): number => {
//   let iteration = 1

//   while (inputArray.length > 1) {
//     inputArray = reduce(inputArray, iteration)

//     iteration++
//   }

//   return inputArray[0]
// }

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])) // 186

// export default arrayConversion