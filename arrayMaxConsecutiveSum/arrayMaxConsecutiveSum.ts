function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    // we want to know the max number we can get after adding k numbers
    // highest consequtive sum

    let sum = 0;
    let max = 0;

    // init value of max
    for (let i = 0; i < k; i++) {
        sum += inputArray[i];
    }

    max = sum;

    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i-k];
        sum += inputArray[i];

        if(sum > max) { // decide whether we reset
            max = sum;
        }
    }

    return max; // return the max value
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));