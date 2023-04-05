let body = document.querySelector('body');
let NewP = document.createElement('p');

let nodeText = document.createTextNode('Soy dinámico!')

body.appendChild(NewP)
NewP.appendChild(nodeText)