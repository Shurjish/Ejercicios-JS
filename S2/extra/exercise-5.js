function rollDice(numberOfFaces) {
    return Math.floor(Math.random() * numberOfFaces + 1);
}

let faces = 6;

console.log(rollDice(faces));