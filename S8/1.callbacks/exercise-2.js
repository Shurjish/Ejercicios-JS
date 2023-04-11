const userAnswers = [];

function confirmExample(string) {
    console.log(string);
    let confirmValue = confirm('Soy un texto');
    return string;
};

    function promptExample(string) {
        console.log(string);
        let prompt = prompt('Soy un texto');
        return string;
    };

function father(string, Callback) {
    answer1 = confirmExample(string);
    userAnswers.push(answer1);

    answer2 = promptExample();
    userAnswers.push(answer2);
};

father('Buenas tardes');
father('Buenas tardes');
father('Buenas noches');



console.log(userAnswers);