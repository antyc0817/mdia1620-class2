const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name

function CheckDrinkingAge(_CurrentAgee){
}
//determine a proper question to ask and the proper variable name for user input
readline.question('Do you want to enter the bar? Let me see your ID wth age please ', _CurrentAge => {

  //call your function here
if (_CurrentAge<13) {
  console.log('You are too young, Go play Fortnite');
}else if (_CurrentAge >= 19 && _CurrentAge <= 50){
  console.log(`Welcome inside, Drink away`)
}else if (_CurrentAge > 50 && _CurrentAge <= 70){
  console.log(`Come inside, are you sure you want drink?`)
}else if (_CurrentAge > 70)
  console.log (`I don't recommend drinking`)
  
  readline.close();
});

// gini - I like how the readline question is in chronological order of how the user would experience this scenario. It makes it easier for other developers to understand the code as well, without any explanations.
// only thing that could imporve is having spaces between the < within the first if function " if (_CurrentAge<13)" just to make it consistent, but doesn't seem like it negatively effects the functionalities so not sure if it even matters 





