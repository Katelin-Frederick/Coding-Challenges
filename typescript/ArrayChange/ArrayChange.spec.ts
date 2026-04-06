import arrayChange from './ArrayChange';

describe('arrayChange', () => {
    it.each([
        [[1, 1, 1], 3],
        [[5, 7, 9], 0],
        [[5, 9, 7], 3],
        [[3, 2, 1], 6],
        [[1, 2, 3], 0],
    ] as Array<[number[], number]>)(
        'case %#: returns minimum operations to make array strictly increasing',
        (input, expected) => {
            expect(arrayChange(input)).toBe(expected);
        },
    );
});
