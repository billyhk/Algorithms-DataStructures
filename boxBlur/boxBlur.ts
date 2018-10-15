function boxBlur(image: number[][]): number[][] {

    // objective: avoid the edges 
    // init some variables to keep track of count

    const res = [];

    // handle edge cases
    for (let y = 0; image.length - 2; y++) {
        const line = [];

        // set up our x
        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0; // what we will use for our divider 

            // + 3 stands for the 3x3 grid
            for (let a = y; a < y + 3; a++) {
                for(let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }

            line.push(Math.floor(sum/count));
        }

        res.push(line);
    }


    // return double nested array after it's been modified
    return res;
    
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));