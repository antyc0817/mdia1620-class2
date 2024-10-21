const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/


/*------------------------- Planning
two varaibles: password and guess
question: What is your password?
question2: What is the secret word? 

if its the same it would give "welcome user access granted"
if its not, give "sorry password wrong, access denied"
if they type in forgot " Here is a helpful hint"
if they type if reset " Lets reset your password now"
function would be called password checker

----------------------------------*/

//determine a proper function name and parameter variable name
function passwordCheck(password, userInput){

  if (userInput === password) {
    console.log(`Welcome, User access is granted`);
} else if (userInput === `forgot`) {
    console.log(`Here is a helfpul hint (meow meow meow)`);
} else if (userInput === "reset") {
    console.log(`Here lets reset your password now`);
} else {
    console.log(`That is the wrong password. You can't enter`);
}
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question('What is your password to enter inside?', _password => {
    readline.question('What is your the secret word', _userInput => {

      //call your function here.
      passwordCheck(_password,_userInput)


      // readline.close();
      if(_userInput !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();