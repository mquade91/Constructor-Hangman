// Load the NPM Package inquirer
var inquirer = require("inquirer");
//and prompt the user if they would like to end the game if none remain.
var WordConstructor = require("./wordConstructor");

var word = new WordConstructor();
word.pickWord();
// console.log("here!!!!!" + word.chosenWord);

var currentWord = word.chosenWord;
console.log(currentWord);


//amount of guesses user starts with
var guessesLeft = 2;

//New Game Function
function newGame() {
    letter();
    guessesLeft = 2;
    word.pickWord();
    console.log(word.chosenWord);

}

//callig the inquire function which begins the game 
letter();

function letter() {
    inquirer.prompt([
            {
                type: "input",
                message: "Guess a word!",
                name: "letter"
    }

    ])
        .then(function(inquirerResponse) {

            if (guessesLeft > 0) {
                if (inquirerResponse.letter === "l") {
                    console.log(inquirerResponse.letter + " is correct!");
                    console.log(guessesLeft);
                    newGame();
                }
                else {
                    console.log("Sorry but " + inquirerResponse.letter + " is not correct.");
                    guessesLeft--;
                    console.log("Guesses left: " + guessesLeft);
                    if (guessesLeft > 0) {
                        letter();
                    }
                    else {
                        console.log("It looks like you are out of guesses.");
                        inquirer.prompt([{
                                name: "end_game",
                                type: "list",
                                message: "Would you like to contniue?",
                                choices: ["Yes", "No"]
                            }])
                            .then(function(inquirer) {
                                if (inquirer.end_game === "Yes") {
                                    newGame();
                                }
                                else {
                                    console.log("Thanks for playing");
                                }

                            });
                    }
                }
            }

        });
}
