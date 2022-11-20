const palindromeNumber = (num: number): boolean => num.toString() === num.toString().split('').reverse().join('')

export default palindromeNumber