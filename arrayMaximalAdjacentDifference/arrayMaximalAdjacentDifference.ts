function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    // we want to get the absolute difference between two adjacent elements

    // init the max difference 
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    // check the max difference between the next two values 

    // do we need to reset our maxDiff value?
    for (let i = 0; i < inputArray.length; i++) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        
        // maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
        
        if (absoluteDiff > maxDiff) {
            maxDiff = absoluteDiff;
        }
    }

    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));