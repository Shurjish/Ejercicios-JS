
function swap(array, a, b) {
    let rotate = array[a];
    array.splice(a, 1, array[b]);
    array.splice(b, 1, rotate);
    return array;
}

let mostFamousPlayers = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

let swappedArray = swap(mostFamousPlayers, 0, 3);
console.log(swappedArray);