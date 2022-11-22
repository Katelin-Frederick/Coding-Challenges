const lengthOfLastWord = (s: string): number => s.trim().split(' ').at(-1)?.length!

export default lengthOfLastWord