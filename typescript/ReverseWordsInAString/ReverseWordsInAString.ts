const reverseWords = (s: string): string => s.split(' ').filter((item) => item !== '').reverse().join(' ')

export default reverseWords