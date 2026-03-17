import allLongestStrings from './AllLongestStrings';

describe('allLongestStrings', () => {
    it.each([
        [
            ['aba', 'aa', 'ad', 'vcd', 'aba'],
            ['aba', 'vcd', 'aba'],
        ],
        [
            ['zyz', 'zz', 'zw', 'wkx', 'zyz'],
            ['zyz', 'wkx', 'zyz'],
        ],
        [
            ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ],
        [['a', 'b', 'c', 'd', 'e', 'f', 'gh'], ['gh']],
        [
            ['kshd', 'hshe', 'es', 'end', 'losp', 'whd', 'ldns'],
            ['kshd', 'hshe', 'losp', 'ldns'],
        ],
    ] as Array<[string[], string[]]>)(
        'case %#: returns all strings with maximum length',
        (input, expected) => {
            expect(allLongestStrings(input)).toStrictEqual(expected);
        },
    );
});
