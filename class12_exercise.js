const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

Planning:
Have a function that ask for user to be added
Ask a question, once you get answer, push into the new array. The User line. 

For list users, a list let i=0;i<users.length;i++) and would list out any user that you have added before

GOAL is for 5 function. 
create user which will add user to chat server. Push into "user array"
list user show all the users added. List out the user array

assign role give one of the 3 role to them 
show setting see all the settings
show permissions see all the permission

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
  */

let users = [];

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};


let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
}

// function createUsers(){
//       readline.question(`What is the user's name that you would like to add?`, _newuser=>{
//         users.push(_newuser);
//         console.log(`This person has now been added `);
//         StartApp()
//       })
// }
//This is the function of creating user. 

function createUsers() {
  readline.question("Type the name of the user to add: ", (name) => {
    if (name) {
      users.push({ name, role: "simple" });
      console.log(`User ${name} added`);
    }
    StartApp();
  });
  }

function listUsers(){
  for(let i=0;i<users.length;i++){
    console.log(users[i]);
  }
  StartApp();
}

//CHALLENGE 2 ONLINE HELP IM LOSING MY MIND IM GOING CRAZY :D
function assignRole() {
  readline.question("Who is the user you want to add a role: ", (_newuser) => {
    
    let user = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === _newuser) {
        user = users[i];
        break;
      }
    }

    if (!user) {
      console.log("User not found");
      return StartApp();
    }

    readline.question("Pick one of three role: moderator, simple or coAdmin: ", (newRole) => {
      if (role[newRole]) {
        user.role = newRole; // Assign role
        console.log(`${_newuser} is now a ${newRole}.`);
      } else {
        console.log("Role not found");
      }
      StartApp();
    });
  });
}

function showPermissions() {
  users.forEach((user) => {
    console.log(`${user.name}'s permissions:`);
    console.log(role[user.role]);
  });
  StartApp();
  }

function assignPermissions(){
  //i choose peace 
}

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      if(_command === "add user"){
        createUsers()
      }
      else if (_command === "list users") {
        listUsers()
      }
      else if (_command === "give role"){
        assignRole()
      }
      else if (_command === "show permissions"){
        showPermissions()
      }
      else if (_command === "give permissions"){
        assignPermissions()
      }

  
    
      if (_command !== "quit") {
        StartApp();
      } else {
        readline.close();
      }
    });
  }
  
  StartApp();
  
  //Plan is easy to understand and code works up until give permissions. Good luck-Daniel


  //Reviewed by Kunwar: Plan is easy to understand and detailed, code works properly