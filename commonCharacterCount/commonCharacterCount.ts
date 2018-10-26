function commonCharacterCount(s1: string, s2: string): number {
   
    // objective: what characters do two strings have in common
    let total = 0;

   // split strings into individual character arrays
   const s1Chars: string[] = s1.split('');
   const s2Chars: string[] = s2.split('');

   // returns character count as an object
   const s1CharCount = getCharList(s1Chars);
   console.log(s1CharCount);

   const s2CharCount = getCharList(s2Chars);
   console.log(s2CharCount);

   // iterate through one of the objects
   // not both -- if it's one, it's in the other
   for (const prop in s1CharCount) {
      if (s2CharCount.hasOwnProperty(prop)) {
          // return the smaller value
          if (s2CharCount[prop] < s1CharCount[prop]) {
              total += s2CharCount[prop]
          } 
          // if they're the same | s1CharCount is <
          else {
              total += s1CharCount[prop];
          }
      }
    }

    // returns total num of common chars
    return total;
}

// returns an object with keys as the letters
function getCharList(chars: string[]): object {
    const wordCount = {}; // what we will append to

    for (let i = 0; i < chars.length; i++) {
        if(wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }
    }

    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
