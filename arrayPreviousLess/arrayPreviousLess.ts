function arrayPreviousLess(items: number[]): number[] {

    const lessThanList: number[] = [];

    // loop through items array backwards 
    for (let i = items.length - 1; i >= 0; i--) {
        // allows us to only check the previous values 
        for(let j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                lessThanList.unshift(items[j]);
                break;
            } else if (j === 0) { // we've gone through array 
            lessThanList.unshift(-1);
            }
        }
    }

    return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));