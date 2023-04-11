
let get = async () => {
    let response = await fetch('https://api.agify.io?name=michael')
    let res = await response.json();
    return res;
}

let draw = (info) => {
    console.log(info);
    console.log(`name: ${info.name}`);
    console.log(`age: ${info.age}`);
    console.log(`count: ${info.count}`);
}

let init = async () => {
    let info = await get();
    draw(info)
}

init();