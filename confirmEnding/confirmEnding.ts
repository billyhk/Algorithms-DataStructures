function confirmEnding(str: string, target: string) {
   
    // gives us the gap we need -- where do we start the string 
    const start = str.length - target.length;
    console.log(start);

    console.log(str.substr(start));
    return str.substr(start) === target;

}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));