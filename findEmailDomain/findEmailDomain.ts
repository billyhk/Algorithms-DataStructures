function findEmailDomain(address: string): string {

    // use lastIndexOf to find the last index of the @ symbol
    const domainIndex = address.lastIndexOf('@');

    // slice at that index, add 1 to cut it off
    return address.slice(domainIndex + 1);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
