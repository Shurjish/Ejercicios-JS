const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let peliculaCorta = [];
let peliculaMediana = [];
let peliculaLarga = [];


for (let i = 0; i < movies.length; i++) {
    const clasificacion = movies[i];

    if (clasificacion.durationInMinutes < 100) {
        peliculaCorta.push(clasificacion.name)
    }

    else if (clasificacion.durationInMinutes < 200) {
        peliculaMediana.push(clasificacion.name)
    }
else {
    peliculaLarga.push(clasificacion.name)
}
}


console.log(peliculaCorta);
console.log(peliculaMediana);
console.log(peliculaLarga);