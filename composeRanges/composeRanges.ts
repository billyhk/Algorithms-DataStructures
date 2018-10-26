function composeRanges(nums: number[]): string[] {

    // handle edge case -- nums[0] needs to exist 
    if (nums.length < 1) {
        return []; // return empty array
    }

    // init an object that has both a start and end point
    const ranges: any[] = [{start: nums[0], end: nums[0]}];
    // increment this end point till it no longer "works"
    console.log(ranges);

    // iterate over the nums array 
    for (let i = 1; i < nums.length; i++) {
        if (ranges[ranges.length - 1].end + 1 === nums[i]) {
            ranges[ranges.length - 1].end = nums[i];
        } else {
            ranges.push({start: nums[i], end: nums[i]});
        }
    }

    // iterate once more, starting at zero
    for (let i = 0; i < ranges.length; i++) {
        if(ranges[i].start !== ranges[i].end) {
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        }
    }

    return ranges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));