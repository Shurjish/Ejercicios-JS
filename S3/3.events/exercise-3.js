
let myInput = document.querySelector('.value');

let InputValue = () => {
    console.log(myInput.value);
};

myInput.addEventListener('input', InputValue)