const addTwoDigits = (n: any): number => {
  const numsArr = n.toString().split('')

  return numsArr.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b)
  })
}

export default addTwoDigits