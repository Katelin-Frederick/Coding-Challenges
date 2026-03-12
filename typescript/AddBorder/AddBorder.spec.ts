import addBorder from './AddBorder';

describe('addBorder', () => {
    it.each([
        [['abc', 'def'], ['*****', '*abc*', '*def*', '*****']],
        [['abcd', 'efgh'], ['******', '*abcd*', '*efgh*', '******']],
        [['efgh', 'abcd'], ['******', '*efgh*', '*abcd*', '******']],
        [['abc', 'def', 'ghi'], ['*****', '*abc*', '*def*', '*ghi*', '*****']],
        [['abcd', 'efgh', 'ijkl'], ['******', '*abcd*', '*efgh*', '*ijkl*', '******']],
        [['abcde', 'fgh', 'ijklmn'], ['********', '*abcde**', '*fgh****', '*ijklmn*', '********']],
        [['ijklmn', 'fgh', 'abcde'], ['********', '*ijklmn*', '*fgh****', '*abcde**', '********']],
        [
            ['bronze', 'picture', 'green', 'gold', 'extinct'],
            ['*********', '*bronze**', '*picture*', '*green***', '*gold****', '*extinct*', '*********'],
        ],
    ] as Array<[string[], string[]]>)('case %#: wraps strings with a star border', (input, expected) => {
        expect(addBorder(input)).toStrictEqual(expected);
    });
});
