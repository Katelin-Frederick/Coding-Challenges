const alphabetSoup = (word: string): string => (word.split('').map((item, index) => {
    let newAsciiCode = item === 'z' ? 97 : item === 'Z' ? 65 : word.charCodeAt(index) + 1

    return String.fromCharCode(newAsciiCode)
}).join(''))

export default alphabetSoup