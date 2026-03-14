const addTwoDigits = (n: number): number => {
    const numsArr = n.toString().split('');

    return numsArr.reduce((acc: number, digit: string) => {
        return acc + parseInt(digit);
    }, 0);
};

export default addTwoDigits;
