function runGame() {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    do {
        guessString = prompt("I'm thinking of a number between 1 to 100.\n\nWhat is the number?");
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert(`You got it! The number was ${target} and you guessed it in ${numTries} tries.`);
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert("You have not entered a number.\n\n\Please enter a integer between 1 - 100.")
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter an integer between 1 - 100.");
    } else if (guessNumber > target) {
        alert("Your number is too high");
    } else if (guessNumber < target) {
        alert("Your number is too low");
    } else {
        correct = true;
    }
    return correct;
}