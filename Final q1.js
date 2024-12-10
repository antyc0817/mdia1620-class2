const { start } = require("repl");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."

------------------------------------------------------
Planning:
3 different functions. one is alcohol setting where if its false, everyone is welcome to drink. If it is true, only if they are 19 and above then they can drink. This function will be toggle alcohol settings. We will set the setting of drink to false. And toggle will make it true. 

So when

second function is asking for the age of the user. This will be register user

third function is about VIP. two settings for this as well

*/



let registry = [];
let settings = {
  //alcohol setting goes here
  drink:false
};

// rename this to RegisterUser
function RegisterUser(){
  readline.question("What is your age to drink?", _age=>{
    registry.push(_age)
    if (settings.drink){
      if(_age >= 19){
        console.log("Okay you can drink here today")
      } else {
        console.log("You are still too young to drink here")
      }
    }  else {
      console.log("Everyone is welcome in here today")
    }
    StartApp()
  })
}


//rename this to ToggleAlcohol
function ToggleAlcohol(){
settings.drink = !settings.drink
 console.log(`Settings of alcohol is now ${settings.drink ? "on" : "off"} `)
 StartApp()
}


//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
  StartApp()
}

function StartApp(){
  readline.question("What would you like to do? Serving alcohol, or drink?   ", _command=>{
    if(_command === "quit"){
      readline.close()
    } else if (_command === "serving alcohol"){
      ToggleAlcohol()
    } else if (_command === "drink"){
      RegisterUser()
    } else if (_command === "all"){
      NotifyAll()
    } else{
      StartApp();
    }
  })
}

StartApp();