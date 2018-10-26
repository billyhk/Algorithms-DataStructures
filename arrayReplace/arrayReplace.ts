function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   
    // iterate through array
    // check if that value is the element to replace
    // if it is, replace with the substitute value 
    inputArray.forEach((element, index) => {
        if(element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));