function areSimilar(a: number[], b: number[]): boolean {
   // are the arrays similar? given two arrays
   // an array is similar: swap a single value 

    const c: number[] = [];
    let d: number[] = []; // will be reversed later on
    
    if (a.toString() === b.toString()) {
       return true;
    }

    // iterate through whole array
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }

   // iterate through one of the arrays
    d = d.reverse(); // did our swap work?

    // check that only a single swap was made 
    // c length should be equal to 2
    if(c.length === 2 && (c.toString() === d.toString())) {
        return true;
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
