import alternatingSums from './AlternatingSums';

describe('alternatingSums', () => {
    it.each([
        [
            [50, 60, 60, 45, 70],
            [180, 105],
        ],
        [
            [4, 7, 1, 6, 9, 1, 8],
            [22, 14],
        ],
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [25, 20],
        ],
    ] as Array<[number[], number[]]>)(
        'case %#: sums even and odd indexed elements separately',
        (input, expected) => {
            expect(alternatingSums(input)).toStrictEqual(expected);
        },
    );
});
