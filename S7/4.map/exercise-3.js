const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let touristPlaces = cities.map((place) => {
    if (place.isVisited) {
        place.name += ' (Visitado)'
    }
    return place.name
});

console.log(touristPlaces);