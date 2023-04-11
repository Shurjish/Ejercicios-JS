const baseUrl = 'https://api.nationalize.io?name=';

let get = async (name) => {
    response = await fetch(baseUrl + name);
    res = await response.json();
    console.log(res);
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