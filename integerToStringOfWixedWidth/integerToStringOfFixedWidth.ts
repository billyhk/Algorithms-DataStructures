function integerToStringOfFixedWidth(number: number, width: number): string {
    let stringifiedNum = number.toString(); // makes the input number a string
    const numberWidth = stringifiedNum.length; // gives us the length of the string
    const widthDiff = width - numberWidth; // how many numbers we pad to start

    // if input number's width is less than the required width,
    // concat some zeros to a string, then add that string to
    // the beginning of the stringifiedNum variable
    if (numberWidth < width) {
        let padStart = '';

        // add a zero to make up the difference in width
        for (let i = 0; i < widthDiff; i++) {
            padStart = padStart.concat('0'); // add to start of string
        }

        return padStart.concat(stringifiedNum);
    }

    // if the number is longer than the input width
    if (numberWidth > width) {
        return stringifiedNum.substring(widthDiff, stringifiedNum.length);
    }

    return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

