let Letter = require('./Letter');

class Word {
    constructor (string) {
        this.createArray = function() {
            let array = [];
            for (let i=0; i < string.length; i++) {
                let currentLetter = new Letter(string[i],false);
                array.push(currentLetter);
            }
            return array;
        }
        this.letters = this.createArray();
        this.toString = function() {
            let word = '';
            this.letters.forEach(letter => {
                let currentChar = letter.toString();
                word += currentChar;
            });
            return word;
        }
        this.check = function (guessChar) {
            let letterCorrect = false;
            this.letters.forEach(letter => {
                let letterCheck = letter.check(guessChar);
                // console.log(letter.toString(),letterCheck);
                if (letterCheck) {
                    letterCorrect = true;
                }
            });
            return letterCorrect;
        }
        this.guessed = function() {
            let isGuessed = true;
            this.letters.forEach(letter => {
                if (!letter.guessed) {
                    isGuessed = false;
                }
            });
            return isGuessed;
        }
    }
}

module.exports = Word;