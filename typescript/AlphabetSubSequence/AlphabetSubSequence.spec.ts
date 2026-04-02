import alphabetSubSequence from './AlphabetSubSequence';

describe('alphabetSubSequence', () => {
    it.each([
        ['effg', false],
        ['cdce', false],
        ['ace', true],
        ['bxz', true],
        ['zab', false],
        ['abcz', true],
        ['abzc', false],
    ])('case %#: checks if "%s" is a strict alphabet subsequence', (input, expected) => {
        expect(alphabetSubSequence(input)).toBe(expected);
    });
});
