function compareIntegers(a: string, b: string): string {
    // compare two ints given as strings

    return parseInt(a) > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
    const a_string = a;
    const b_string = b;

    if (a_string < b_string) {
        return "less";
    } else if (a_string > b_string) {
        return "greater";
    } else {
        return "equal";
    }

}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));