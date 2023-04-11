const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let streamerFinder = (incomingValues) => {

    // console.log(incomingValues);

    let filteredStreamers = streamers.filter(streamer => streamer.name.includes(incomingValues));
    
    // console.log(filteredStreamers);
    
    console.log(...filteredStreamers.map(streamer => streamer.name));
    }
    
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    button.addEventListener('click', () => streamerFinder(input.value));