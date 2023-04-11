let getCharacters = async () => {
    response = await fetch('https://rickandmortyapi.com/api/character');
    res = await response.json();
    console.log(res);
}

getCharacters();