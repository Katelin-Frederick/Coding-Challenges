const ValidSudoku = (board: string[][]): boolean => {
  let set = new Set()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue

      let val = board[i][j]

      if (set.has(`row${i}_${val}`) || set.has(`col${j}_${val}`) || set.has(`box_${Math.floor(i / 3)}_${Math.floor(j / 3)}_${val}`)) {
        return false
      } else {
        set.add(`row${i}_${val}`)
        set.add(`col${j}_${val}`)
        set.add(`box_${Math.floor(i / 3)}_${Math.floor(j / 3)}_${val}`)
      }
    }
  }

  return true
}

export default ValidSudoku