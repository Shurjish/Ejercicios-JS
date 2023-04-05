let body = document.querySelector('body');

let newDiv = document.createElement('div');

let newPs = [];

for (let i = 0; i < 6; i++) {
    newPs[i] = document.createElement('p');
    newDiv.appendChild(newPs[i])
}

body.appendChild(newDiv);

