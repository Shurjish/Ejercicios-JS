
let Click = () => {
    console.log(event);
}

let newButton = document.querySelector('#btnToClick');
newButton.addEventListener('click', Click);