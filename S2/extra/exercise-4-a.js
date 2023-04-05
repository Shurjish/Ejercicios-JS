
function findArrayIndex(array, text) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == text) {
            return(i);
        }
    }
}

let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(animals, 'Caracol'));
console.log(findArrayIndex(animals, 'Mosquito'));
console.log(findArrayIndex(animals, 'Salamandra'));
console.log(findArrayIndex(animals, 'Ajolote'));


let salad = ['Lettuce', 'Tomato', 'Onion', 'Olives', 'Olive oil', 'Vinegar', 'Salt']
console.log(findArrayIndex(salad, 'Tomato'));
console.log(findArrayIndex(salad, 'Olive oil'));
console.log(findArrayIndex(salad, 'Salt'));