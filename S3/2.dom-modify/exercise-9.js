let divSelector = document.getElementsByClassName('fn-insert-here');

let pInTheDiv = [];

for (let i = 0; i < divSelector.length; i++) {
    pInTheDiv[i] = document.createElement('p');
    pInTheDiv[i].innerHTML = 'Voy dentro!';
    divSelector[i].appendChild(pInTheDiv[i]);
}

console.log(pInTheDiv);
console.log(divSelector);