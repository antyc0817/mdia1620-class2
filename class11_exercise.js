const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

/* PLANNING
4 different called upon function: one would be to add, one would be to read and check, one would be to ban them and last one would be to read and check the banned list

we have the 4 different function 

ADD would run the command AddUserToRegistry
CheckR would run the command CheckRegistry
BAN would run the command BanUser
CheckB would run the command Checkbanned

To start off, we would have 3 users and 3 banned
user: David, Maggie, Ali
Banned: Harry, Peter, Ella

Function Add: 
This would ask a question. The question would be "who do you want to add"
once we get the input, add it to the list of (USERS)

Function CheckR:
This would simply read all the names in (USERS)

Function Ban: 
This would ask a question. The quesiton would be "who is getting banned,"
once we get the input, add it to the list of (Banned)

Function CheckB: 
This would simply read all the names in (BANNED)

*/


let users = ["David", "Maggie", "Ali"];
let banned = ["Harry", "Peter", "Ella"];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry(){
  if (settings.addRegistry===true){
  readline.question("what is the name?", _users=>{
  users.push(_users);
  StartApp();
}) } //If you are just doing the basic first step you don't need to use if statment you can send the username after asking the question ,USE A FOR LOOP - Reviewd=ed by Cesaria
}


function CheckRegistry(){
  console.log("These are all the people in the list")
  for(let i=0; i<users.length; i++){
      console.log(`The name is ${users[i]}`)// if its a list maybe you would want to just add the console log on the top " This is the list" and then console log the name with a numbering similar to the check banned function- reviewd by Cesaria
      //These are the people in the list: the name is CESARIA , 0. REGAN 
  }
  StartApp();
}


function BanUser(){
  if (settings.addRegistry===true){
  readline.question("what is the name?", _banned=>{
  banned.push(_banned);
  StartApp();
}) } 
}


function CheckBanned(){
  console.log("These are all the people in the list")
  for(let i=0; i<banned.length; i++){
      console.log(`The name is ${banned[i]}`)
  }
  StartApp();
}


function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    if(_command === "Add"){
      AddUserToRegistry();
    }
    if(_command === "CheckR"){
      CheckRegistry();
    }
    if(_command === "Ban"){
      BanUser();
    }
    if(_command === "CheckB"){
      CheckBanned();
    }
    if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();

// Reviewed by Daniel:
// Plan is very detailed and the code runs smoothly. You should try the challenges!

// Reviewd by Cesaria
