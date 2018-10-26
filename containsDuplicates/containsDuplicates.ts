function containsDuplicates(a: number[]): boolean {

    // sort the input array
    a.sort((a, b) => a-b); 

    // iterate through array and check for dups
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            return true;
        }
    }
    
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
