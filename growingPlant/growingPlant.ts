function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    // keep track of day and height of plant 
    let days = 0;
    let currentHeight = 0;

    while (currentHeight < desiredHeight) {
        days++;
        currentHeight += upSpeed;

        if(currentHeight < desiredHeight) {
            currentHeight -= downSpeed;
        }

    }

    return days;
}

console.log(growingPlant(100, 10, 910))