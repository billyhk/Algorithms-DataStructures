/*
    Find the leftmost digit that occurs in a given string

    Use: split() & includes()
*/


function firstDigit(inputString: string): string {

    // init a digits array containing the integers to check against
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // iterate through the inputString
    for (let i = 0; i < inputString.length; i++) {
        // check if inputString at that index is a digit
        if (digits.includes(inputString[i])) {
            return inputString[i]; 
        }
    }

}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
