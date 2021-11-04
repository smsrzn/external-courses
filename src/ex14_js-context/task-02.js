function Hangman(word) {
  this.word = word;
  this.errors = 6;
  this.wrongSymbols = [];
  this.currentResult = new Array(this.word.length).fill('_');

  this.guess = function guess(letter) {
    if (this.errors) {
      if (this.word.indexOf(letter) > -1) {
        for (let i = 0; i < this.word.length; i += 1) {
          if (this.word.charAt(i) === letter) {
            this.currentResult[i] = this.word[i];
          }
        }

        if (this.currentResult.join('') === this.word) {
          console.log(`${this.word}| You won!`);
        } else {
          console.log(this.currentResult.join(''));
        }
      } else {
        this.errors -= 1;
        this.wrongSymbols.push(letter);
        console.log(`wrong letter, errors left ${this.errors} | ${this.wrongSymbols}`);
      }
    } else {
      console.log('you have no more chances');
    }
  };

  this.getGuessedString = function getGuessedString() {
    return this.currentResult.join('');
  };

  this.getErrorsLeft = function getErrorsLeft() {
    return this.errors;
  };

  this.getWrongSymbols = function getWrongSymbols() {
    return this.wrongSymbols;
  };

  this.getStatus = function getStatus() {
    return `${this.getGuessedString} | errors left ${this.getErrorsLeft}`;
  };

  this.startAgain = function startAgain(newWord) {
    this.word = newWord;
    this.errors = 6;
    this.wrongSymbols = [];
    this.currentResult = new Array(this.word.length).fill('_');
  };
}
const hangman = new Hangman('webpurple');

module.exports = hangman;
