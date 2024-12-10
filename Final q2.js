const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest



Planning: 
Simple badge system- similar to the task system we did in class. This involves having 5 modes. New, easy, medium, hardes, and apocolypse. When you add a badge, the mode will increase by one depending on the one you add. At the end include one that would add up all the current badges and match it towards the "challenge one Start by having the 5 different badges and set to 0. When you want to add a task, it only increase by one. 

Challenge 1- just add all the points together and see how much badge they have. If its over a certain amount, give differnt status bar. Make sure it starts at 0. 

Challenge 2. - 
Make so that the make badge would count the point in a different way. Rather than counting it one by one, it would also * by the word. Count

*/

let badge = {
  new: 0,
  easy: 0,
  medium: 0,
  hardest: 0,
  apocolypse: 0,
};

//rename this to ShowStatus
function ShowStatus(){
  for(let key in badge){
    console.log("The badge", key, "has", badge[key], "points")
  }
  StartApp()
}

//rename this to AddPoints
function AddPoints(){ 
  readline.question("Which mode would you like to add? new, easy, medium, hardest, apocolypse? ",_badge=>{

    let checkBadge = false
    for(let key in badge){
      if(key === _badge){
        checkBadge = true
      }
    }
  
    if (checkBadge === true){
      badge[_badge]++
      console.log("Your task has been added now")
    }
  StartApp()
})
}


function MakeBadge() {
  let total = 0;
  for (let category in badge) {
    total += badge[category] * category.length 
  }

  let badgelevel;
  if (total < 10) {
    badgelevel = "Horrible newbie"
  } else if (total >= 10 && total <= 20) {
    badgelevel = "adventurer"
  } else if (total >= 21 && total <= 30) {
    badgelevel = "slayer"
  } else if (total >= 31 && total <= 40) {
    badgelevel = "divined";
  } else if (total > 40) {
    badgelevel = "eternal"
  }

  console.log(`Total badge points: ${total}. Adventure level status: ${badgelevel}.`)
  StartApp();
}




function StartApp(){
  readline.question("Do you want to 'add' a badge or 'show' status today or see 'total' badge? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "add"){
    AddPoints() 
    } else if (_command === "show"){
      ShowStatus()
    } else if (_command === "total"){
      MakeBadge()
    } else{
      StartApp();
    }
  })
}

StartApp();