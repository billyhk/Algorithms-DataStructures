function isTandemRepeat(inputString: string): boolean {
    const wordLength = inputString.length;

    if (wordLength % 2 === 0) {
        const firstHalf = inputString.slice(0, wordLength / 2);
        const secondHalf = inputString.slice(wordLength / 2, wordLength);
    
        // check if they can go in tandem
        return firstHalf === secondHalf;
    }
    
    // odd values cannot be cut in half equally
    return false;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
