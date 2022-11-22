const removeDuplicates = (nums: number[]): number => {
  let uniqueLength = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[uniqueLength++] = nums[i]
    }
  }

  return uniqueLength
}

export default removeDuplicates