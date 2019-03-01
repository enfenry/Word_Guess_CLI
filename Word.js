// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

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
            this.letters.forEach(letter => {
                letter.check(guessChar);
            });
        }
    }
}

let testWord = new Word('Roosevelt');

testWord.check('R');
testWord.check('e');

// console.log(testWord);
console.log(testWord.toString());