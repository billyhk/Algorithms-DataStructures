function isCaseInsensitivePalindrome(inputString: string): boolean {

    // check if it can become a palindrome, case insensitive

    // send to lowercase
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split('').reverse().join('');

    return originalLowerCase === reversedWord; 

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));