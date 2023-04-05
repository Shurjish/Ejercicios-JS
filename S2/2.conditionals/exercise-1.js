const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

    for (let i = 0; i < alumns.length; i++) {
        const quarter = alumns[i];
        let counter = 0;

        if (quarter.T1) {
            counter++;
        }

        if (quarter.T2) {
            counter++;
        }

        if (quarter.T3) {
            counter++;
        }

        if (counter > 1) {
            quarter.isApproved = true;
            
        }

        else {
            quarter.isApproved = false;
        }
    }

    console.log(alumns);