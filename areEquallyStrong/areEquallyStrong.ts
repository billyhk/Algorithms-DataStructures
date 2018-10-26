function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    // what is our strongest
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight; 
    // what is our weakest
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    // what is their strongest
    const friendStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    // what is their strongest
    const friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;

    // is my strongest = friends strongest?
    
    // is my weakest = friends weakest?
    return yourStrongest === friendStrongest && yourWeakest === friendWeakest;

}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
