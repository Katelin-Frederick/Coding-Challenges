const alphabetSubSequence = (sequence: string): boolean => {
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence.charCodeAt(i) >= sequence.charCodeAt(i + 1)) {
      return false
    }
  }

  return true
}

export default alphabetSubSequence