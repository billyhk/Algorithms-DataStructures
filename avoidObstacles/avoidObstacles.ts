function avoidObstacles(inputArray: number[]): number {
    
    // sort array numerically
    inputArray = inputArray.sort((a, b) => a-b);

    // create a value that we're going to iterate up to
    const largestArrayVal = inputArray[inputArray.length - 1];

    // iterate through array
    for (let i = 1; i <= largestArrayVal + 1; i++) {

        // if every element in the array is != what we % by current
        // index value, then we found the shortest jump 
        if(inputArray.every((element) => element % i !== 0)) {
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));