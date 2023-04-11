const baseUrl = 'https://api.nationalize.io?name=';

let counter = 1;

let get = async (name) => {
    response = await fetch(baseUrl + name);
    res = await response.json();
    draw(res);
}

let deleteP = (deleteClass) => {
    let removeP = document.querySelector(`.${deleteClass}`);
    removeP.remove();

    let removeButton = document.querySelector(`.${deleteClass}`)
    removeButton.remove();
}

let draw = (res) => {
    let body = document.querySelector('body');
    let p = document.createElement('p')
    p.setAttribute('class', `row${counter}`);
    body.appendChild(p)

    p.innerHTML = `el nombre ${res.name} tiene un ${(res.country[0].probability * 100).toFixed(2)}% de ser de ${res.country[0].country_id}  un ${(res.country[1].probability * 100).toFixed(2)}% porciento de ser de ${res.country[1].country_id}`;

    let deletebutton = document.createElement('button');

    deletebutton.setAttribute('class', `row${counter}`);
    deletebutton.innerHTML = 'Delete';
    body.appendChild(deletebutton);

    deletebutton.addEventListener('click', ()=> deleteP(p.getAttribute('class')));
    counter++;
}

let takeInput = () => {
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    button.addEventListener('click', () => get(input.value));
}

let init = () => {
    takeInput();
}

init()