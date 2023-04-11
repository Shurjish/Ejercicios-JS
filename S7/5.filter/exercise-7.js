const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let streamerFinder = (incomingValues) => {

let filteredStreamers = streamers.filter(streamer => streamer.name.includes(incomingValues));

console.log(incomingValues);

let mapedStreamers = filteredStreamers.map(streamer => streamer.name);

console.log(mapedStreamers);
}

let input = document.querySelector('input');
input.addEventListener('input', () => streamerFinder(input.value));


