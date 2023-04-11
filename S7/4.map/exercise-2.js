const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let names = users.map((user) => {

    if (user.name[0].includes('A')) {
        user.name = 'Anacleto';
    }
        return user.name;
});

console.log(names);