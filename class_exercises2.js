const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

//determine a proper parameter variable name
function GuessingGame(_MarbleNumber, _guessNumber) {
  if (_MarbleNumber < _guessNumber ){
  console.log(`Haha you guessed wrong, the number is too big`);
  }else if (_MarbleNumber>_guessNumber){
    console.log(`Haha you guessed wrong, the number is too small`)
  }else if (_MarbleNumber===_guessNumber){
    console.log (`Noice, you guessed the correct number. You win a cookie. `)
  }

}


//determine a proper question to ask and the proper variable name for the answer
readline.question("How many marbles is in the picture? Its between 1-50", (_Marble) => {

  const _MarbleNumber= Number (_Marble)

  //make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("Guess a number  ", (_guess) => {
      const _guessNumber= Number(_guess);
      //call your function here

      GuessingGame(_MarbleNumber, _guessNumber);
      if (_guess === "quit") {
        readline.close();
      } else {
        StartGame();
      }
    });
  }

  StartGame();
});
