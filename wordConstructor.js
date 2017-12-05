// var Word = require("./Word");

var WordConstructor = function() {
    this.chosenWord;

    this.pickWord = function() {
        var words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
        this.chosenWord = words[Math.floor(Math.random() * words.length)];
    }
}



module.exports = WordConstructor;
