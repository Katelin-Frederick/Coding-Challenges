const longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) return ''

  let prefix = ''

  let maxPrefixLength = strs.sort()[0].length

  for (let i = 0; i < maxPrefixLength; i++) {
    let char = strs[0][i]

    if (strs.every(str => str[i] === char)) {
      prefix += char
    } else {
      break;
    }
  }

  return prefix
}

export default longestCommonPrefix