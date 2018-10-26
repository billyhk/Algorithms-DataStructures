function flattenArray(arr: any[]): any[] {
    const flatArray = [];

    // call flatten recursively 
    flatten(arr);

    // iterate through array
    function flatten(arr: any[]) {
        // if element is an array, then flatten it
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                flatten(element);
            } else {
                flatArray.push(element);
            }
        });
    }

    // if flatten fails, return flattened array 
    return flatArray;

}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
