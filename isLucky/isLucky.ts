// would be a public method:
// public isLucky(n: number): boolean {};

function isLucky(n: number): boolean {
    // convert number to string
    const luckyN = n.toString();
    const half = luckyN.length / 2; // gives us the halfway point

    // get the half way point, cut up number into two halves
    const firstHalf = getTotal(luckyN.substring(0, half));
    const secondHalf = getTotal(luckyN.substring(half, luckyN.length));
    
    // check if sum of the halves are equal 
    return firstHalf === secondHalf;
}

// would be a private method:
// private getTotal(n: string) {};

function getTotal(n: string) {
    return n.split('').map((char) => parseInt(char)).reduce((num1, num2) => num1 + num2);
}


/** BUD - Duplicate Logic
 * 
 *  - Create a function to use as a helper
 * 
 */

console.log(isLucky(1230));
console.log(isLucky(239017));