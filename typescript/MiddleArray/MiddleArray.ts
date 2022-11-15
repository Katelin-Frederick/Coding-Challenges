const middleArray = (arr: number[]): number => arr.length % 2 === 0
  ? arr[(arr.length / 2) - 1]
  : arr[Math.floor(arr.length / 2)]

export default middleArray