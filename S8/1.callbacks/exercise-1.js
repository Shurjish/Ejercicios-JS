const numbersList = [];

function sum(a, b) {
    return (a + b);
}

function substract(a, b) {
    return (a - b);
}

function father(a, b, callback) {
    numbersList.push(callback(a, b));
    console.log(numbersList);

}

setTimeout(() => father(7, 3, sum), 1000);
setTimeout(() => father(15, 5, sum), 1500);
setTimeout(() => father(20, 5, substract), 2000);
setTimeout(() => father(10,5, substract), 2500);
