const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let soundsArray = [];
let objectsArray = [];

for (const person of users) {
  for (const sound in person.favoritesSounds) {
    if (!soundsArray.includes(sound)) {
      soundsArray.push(sound);

      let factor = { name: sound, counter: 1 };
      objectsArray.push(factor);
    } else {
      for (let item of objectsArray) {
        if (sound == item.name) item.contador++;
      }
    }
  }
}

for (let factor of objectsArray) {
    console.log(`** ${factor.name}: ${factor.counter}`);
}