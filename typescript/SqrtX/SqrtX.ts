const mySqrt = (x: number): number => {
  let val = 0

  while ((val * val) <= x) val++

  return val - 1
}

/* IF I COULD USE BUILT IN FUNCTIONS:
const mySqrt = (x: number): number => Math.floor(Math.sqrt(x))
*/

export default mySqrt