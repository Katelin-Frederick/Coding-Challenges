const areSimilar = (arr1: number[], arr2: number[]): any => {
  const misMatch1 = []
  const misMatch2 = []

  if (arr1.length !== arr2.length) {
    return false
  }

  if (arr1.toString() === arr2.toString()) {
    return true
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      misMatch1.push(arr1[i])
      misMatch2.push(arr2[i])
    }
  }

  misMatch2.reverse()

  if (misMatch1.length === 2 && misMatch1.toString() === misMatch2.toString()) {
    return true
  }

  return false
}

export default areSimilar