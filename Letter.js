// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

class Letter {
    constructor (character,guessed) {
        this.character = character;
        this.guessed = guessed;
        this.checkAlphabet = function () {
            let lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            if (lettersArray.includes(this.character.toLowerCase())) {
                return true;
            }
            else {
                this.guessed = true;
                return false;
            }
        };
        this.isInAlphabet = this.checkAlphabet();
        this.toString = function () {
            if (this.guessed) {
                return ' ' + this.character + ' ';
            }
            else {
                return ' _ ';
            }
        };
        this.check = function (guessChar) {
            let letterCorrect = guessChar.toLowerCase() === this.character.toLowerCase();
            if (letterCorrect) {
                this.guessed = true;
            }
            return letterCorrect;
        };
    }
}

module.exports = Letter;

// let A = new Letter('a',false);
// let B = new Letter('B',false);
// let C = new Letter('C',false);

// A.check('a');
// B.check('a');
// C.check('a');

// // console.log(A,B,C);
// console.log(A.toString(),B.toString(),C.toString());

// A.check('B');
// B.check('B');
// C.check('B');

// // console.log(A,B,C);
// console.log(A.toString(),B.toString(),C.toString());

// A.check('c');
// B.check('c');
// C.check('c');

// // console.log(A,B,C);
// console.log(A.toString(),B.toString(),C.toString());