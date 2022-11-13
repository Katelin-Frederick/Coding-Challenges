import alphabetSoup from './AlphabetSoup'

test("Alphabet Soup", () => {
    expect(alphabetSoup('crazy')).toBe('dsbaz')
    expect(alphabetSoup('abc')).toBe('bcd')
    expect(alphabetSoup('ZAB')).toBe('ABC')
    expect(alphabetSoup('CrAzY')).toBe('DsBaZ')
})