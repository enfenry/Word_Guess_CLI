// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

let Word = require('./Word');
let inquirer = require("inquirer");

let wordArray = ['Nolan', 'Henry'];
let randomNum = 0;
let currentWord;
let wordComplete = false;
let answersLeft = 0;

let initRound = function (word) {
    return inquirer.prompt(
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ).then(function (input) {
        let letterCorrect = word.check(input.guess);
        console.log(word.toString());
        if (letterCorrect) {
            console.log('CORRECT!')
        }
        else {
            console.log('INCORRECT! ' + answersLeft + ' guesses remaining.')
        }
        if (word.guessed()) {
            console.log('You got it right! Next word:')
            wordComplete = true;
        }
    });
};

async function run() {
    randomNum = Math.floor(Math.random() * wordArray.length);
    currentWord = new Word(wordArray[randomNum]);
    wordComplete = false;
    answersLeft = 10;
    console.log(currentWord.toString());
    do {
        await initRound(currentWord);
    } while (!wordComplete && answersLeft > 0);
    run();
}

run();