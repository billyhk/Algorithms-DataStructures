function firstNotRepeatingCharacter(s: string): string {

    const chars: string[] = s.split('');
    let duplicates = {};
    let answer = '_';

    // keep track of what we have first
    let indexAnswer = Number.MAX_SAFE_INTEGER;

    // iterate through our chars 
    chars.forEach((element, index) => {
        // check if property already exists
        if (!duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1,
                index
            };
        } else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    });

    for (const key in duplicates) {
        if(duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }

    return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
