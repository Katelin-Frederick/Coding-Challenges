import adjacentElementsProduct from './AdjacentElementsProduct';

describe('adjacentElementsProduct', () => {
    it.each([
        [[3, 6, -2, -5, 7, 3], 21],
        [[6, 8, 1, 7, 6, 5, 2], 48],
        [[9, 4, 3, 2, 8, 7, 3], 56],
    ] as Array<[number[], number]>)(
        'case %#: returns the largest product of adjacent elements',
        (input, expected) => {
            expect(adjacentElementsProduct(input)).toBe(expected);
        },
    );
});
