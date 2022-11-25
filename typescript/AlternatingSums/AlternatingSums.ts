const alternatingSums = (inputArray: number[]): number[] => {
  let team1Total = 0 // Even Sum
  let team2Total = 0 // Odd Sum

  inputArray.forEach((item, index) => {
    index % 2 === 0 ? team1Total += item : team2Total += item
  })

  return [team1Total, team2Total]
}

export default alternatingSums