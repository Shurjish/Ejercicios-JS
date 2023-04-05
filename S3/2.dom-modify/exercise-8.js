let inTheMiddle = document.createElement('p');
inTheMiddle.innerText = 'Voy en medio!'

let div = document.querySelector('div');
let body = document.querySelector('body');

body.insertBefore(inTheMiddle, div.nextSibling)