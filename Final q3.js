const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.

Planning: 
Have 5 colours in the theme . Red, green, blue, yellow, and orange. They are all true. 
To add a colour to the list, it has to be one of the 5 colour...  
Toggle would remove the colour if its already selected. changing it from true to false. 



*/

let userColors = [];
let theme = {
  red: true,
  green: true,
  blue: true,
  yellow: true,
  orange: true,
};

function AddUserColor() {
  readline.question("Pick one colour you want to add (red, green, blue yellow, orange) ", (_colour) => {
    _colour = _colour.toLowerCase()
    if (theme[_colour] === true) {
      if (!userColors.includes(_colour)) {
        userColors.push(_colour);
        console.log(`${_colour} has been added to your favorites.`)
      } else {
        console.log(`${_colour} is already in your favorites.`)
      }
    } else if (theme[_colour] === false) {
      console.log(`${_colour} is currently unavailable and cannot be added.`)
    } else {
      console.log(`${_colour} is not a valid colour.`)
    }
    StartApp()
  });
}

function DisplayUserColors() {
  console.log("Your current colours:");
  if (userColors.length === 0) {
    console.log("No colour selected yet.");
  } else {
    userColors.forEach((_colour) => console.log(_colour));
  }
  StartApp()
}

function ToggleThemeColor() {
  readline.question("Which color setting do you want to toggle? ", (_toggleColor) => {
    readline.question("Do you want to switch it on/off? ", (toggleType) => {
      for (key in theme) {
        if (key === _toggleColor) {
          if (toggleType === "on") {
            theme[key] = true;
            console.log(`The setting for "${key}" is now ON.`);
          } else if (toggleType === "off") {
            theme[key] = false;
            console.log(`The setting for "${key}" is now OFF.`);
            userColors = userColors.filter((color) => color !== key);
          }
          StartApp();
        }
      }
    });
  });
}



function StartApp(){
  readline.question("What would you like to do? 'toggle' 'add' or 'display' ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "toggle"){
      ToggleThemeColor()
    } else if (_command === "add"){
      AddUserColor()
    } else if (_command === "display"){
      DisplayUserColors()
    } else{
      StartApp();
    }
  })
}

StartApp();