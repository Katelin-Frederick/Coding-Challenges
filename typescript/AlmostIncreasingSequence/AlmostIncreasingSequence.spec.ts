import almostIncreasingSequence from './AlmostIncreasingSequence';

describe('almostIncreasingSequence', () => {
    it.each([
        [[1, 3, 2, 1], false],
        [[1, 3, 2], true],
        [[1, 3, 1, 2], false],
        [[1, 3, 1, 1], false],
        [[1, 30, 10, 20], true],
        [[1, 25, 10, 26, 31, 32], true],
        [[10, 1, 2, 3, 4, 5], true],
        [[1, 1, 1, 2, 3, 4, 5], false],
    ] as Array<[number[], boolean]>)(
        'case %#: determines if sequence is almost increasing',
        (input, expected) => {
            expect(almostIncreasingSequence(input)).toBe(expected);
        },
    );
});
