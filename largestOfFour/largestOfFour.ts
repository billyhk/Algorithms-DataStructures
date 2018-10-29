function largestOfFour(nums: number[][]): number[] {

    const highestNumbers: number[] = [];

    // iterate through double-nested array
    for (let numberGroup of nums) {
        // reset number for every new array 
        let largest = 0;

        // on each iteration, check if our number
        // is larger than our current largest number
        for (let number of numberGroup) {
            largest = largest < number ? number : largest;
        }

        highestNumbers.push(largest);
    }

    // return an array containing the largest values
    return highestNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));