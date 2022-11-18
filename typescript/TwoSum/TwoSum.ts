const twoSum = (nums: number[], target: number): number[] | void => {
  const map: any = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i]
    }

    map[nums[i]] = i
  }
}

export default twoSum