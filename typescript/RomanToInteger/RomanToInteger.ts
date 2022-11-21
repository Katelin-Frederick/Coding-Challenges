const romanToInteger = (s: string): number => {
  const numerals: any = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let value = 0

  for (let i = 0; i < s.length; i += 1) {
    numerals[s[i]] < numerals[s[i + 1]] ? value -= numerals[s[i]] : value += numerals[s[i]]
  }

  return value
}

export default romanToInteger