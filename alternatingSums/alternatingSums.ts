function alternatingSums(a: number[]): number[] {
    // establish 
    let evenSum = 0;
    let oddSum = 0;

    // iterate through the array
    a.forEach((element, index) => { // "divide" array
        // add values from both teams
        if(index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });

    // return array containing team sums
    return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))