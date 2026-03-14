const adjacentElementsProduct = (arr: number[]): number => {
  let largestProduct = arr[0] * arr[1]

  for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i] * arr[i + 1]) > largestProduct) {
      largestProduct = arr[i] * arr[i + 1]
    }
  }

  return largestProduct
}

export default adjacentElementsProduct