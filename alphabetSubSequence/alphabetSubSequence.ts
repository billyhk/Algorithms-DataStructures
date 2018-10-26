function alphabetSubsequence(s: string): boolean {

    // what do i need to code against?
    // itc, falsey values
    const chars: string[] = s.split(''); // split str into chars
    const charValues: number[] = [];


    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });

    // sets are new arrays, don't take dups
    if(new Set(charValues).size !== charValues.length) {
        return false;
    }

    for(let i = 0; i < charValues.length; i++) {
        if(charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
