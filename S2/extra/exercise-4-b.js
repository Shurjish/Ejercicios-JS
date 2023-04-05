
function findArrayIndex(array, text) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == text) {
            return(i);
        }
    }
}

function removeItem(array, text) {
    
    let i = findArrayIndex(array, text);
    array.splice(i, 1);
    return(array);
}


let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(removeItem(animals, 'Caracol'));

let salad = ['Lettuce', 'Tomato', 'Onion', 'Olives', 'Olive oil', 'Vinegar', 'Salt']
console.log(removeItem(salad, 'Lettuce'));
console.log(removeItem(salad, 'Onion'));
console.log(removeItem(salad, 'Olives'));