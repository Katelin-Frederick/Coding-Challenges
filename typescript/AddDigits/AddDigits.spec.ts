import addDigits from './AddDigits';

describe('addDigits', () => {
    it.each([
        [29, 11],
        [35, 8],
        [63, 9],
        [123, 6],
        [475, 16],
        [648, 18],
    ])('addDigits(%i) = %i', (input, expected) => {
        expect(addDigits(input)).toBe(expected);
    });
});
