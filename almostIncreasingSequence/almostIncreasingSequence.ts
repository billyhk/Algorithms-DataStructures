function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;

    for(let i = 0; i < sequence.length; i++) {
        // is the second number > than the first?
        if(sequence[i] <= sequence[i - 1]) {
            count++;
            // is the current value < two values before it?
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                // hit the double count, no need to do another iteration
                return false;
            }
        }
    }

    // condition:
    // if two or more nums are out of sync, don't return
    // return only if less than or equal to 1 
    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 

// once we have a condition, we want to loop through the arr