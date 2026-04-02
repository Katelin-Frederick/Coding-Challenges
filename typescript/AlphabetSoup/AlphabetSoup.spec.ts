import alphabetSoup from './AlphabetSoup';

describe('alphabetSoup', () => {
    it.each([
        ['crazy', 'dsbaz'],
        ['abc', 'bcd'],
        ['ZAB', 'ABC'],
        ['CrAzY', 'DsBaZ'],
    ] as Array<[string, string]>)(
        'case %#: shifts each character up by one in the alphabet',
        (input, expected) => {
            expect(alphabetSoup(input)).toBe(expected);
        },
    );
});
