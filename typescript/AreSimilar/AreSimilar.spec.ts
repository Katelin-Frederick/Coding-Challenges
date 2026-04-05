import areSimilar from './AreSimilar';

describe('areSimilar', () => {
    it.each([
        [[1, 2, 3], [1, 2, 3], true],
        [[1, 2, 3], [2, 1, 3], true],
        [[1, 2, 2], [2, 1, 1], false],
        [[1, 2, 3, 4], [1, 2, 3], false],
        [[5, 4, 3, 2, 1], [5, 3, 4, 2, 1], true],
        [[5, 4, 3, 1, 2], [5, 3, 4, 2, 1], false],
        [[1, 2, 3, 4], [5, 6, 7, 8], false],
    ] as Array<[number[], number[], boolean]>)(
        'case %#: determines if arrays are similar',
        (a, b, expected) => {
            expect(areSimilar(a, b)).toBe(expected);
        },
    );
});
