// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

let Word = require('./Word');
let inquirer = require("inquirer");

let wordArray = ['Nolan', 'Henry'];
let randomNum = Math.floor(Math.random() * wordArray.length);
let currentWord = new Word(wordArray[randomNum]);

let roundComplete = false;
let wordComplete = false;
let count = 0;

let initRound = function () {
    if (roundComplete === false) {
        inquirer.prompt(
            {
                name: "guess",
                message: "Guess a letter!"
            }
        ).then(function (input) {
            let letterCorrect = currentWord.check(input.guess);
            console.log(currentWord.toString());
            if (letterCorrect) {
                console.log('CORRECT!')
            }
            else {
                console.log('INCORRECT! ' + 10 + ' guesses remaining.')
            }
        });
        roundComplete = true;
        if (currentWord.guessed()) {
            wordComplete = true;
        }
        initRound();
    }
    // else {
    //     for (var x = 0; x < programmerArray.length; x++) {
    //       programmerArray[x].printInfo();
    //     }
    //   }
};

initRound();


