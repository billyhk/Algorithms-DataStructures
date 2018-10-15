function adjacentElementsProduct(inputArray: number[]): number {

  // we need a base value
  let largestProduct = inputArray[0] * inputArray[1];

  // start at 1, bc index 0 does not have a "left"
  // removes the need for an extra iteration 

  for (let i = 1; i < inputArray.length - 1; ++i) {
      // we start at length - 1 to avoid "nan" from last number
      const product = inputArray[i] * inputArray[i + 1];

      // if result is larger than current longest product, replace
      largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));