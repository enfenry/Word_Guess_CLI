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