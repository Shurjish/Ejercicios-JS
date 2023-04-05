const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const parts in alien) {
    console.log(`${parts}: ${alien[parts]}`);
    
}