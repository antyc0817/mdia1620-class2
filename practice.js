
const kName="David"
let food="pizza"

// its the small ` beside one for the ${}
console.log(
`Welcome back mister ${kName}, I'm just trying to make this easier to read. I'm going to eat ${food} now`
)
// this is harder to read but its the same thing at the end of the day. Just need the space in the quotation 
// so the name would have the space
food="dog"
console.log( "Welcome back mister " + kName + " I'm just using the other method. I will eat " + food + " since i so hungry")


// only one of them has to be true, it will work since its OR

condition1="1"
condition2="2"

if(true || false){
  console.log("this will work since ")
  }
  
  // AND both has to be true 
  if (condition1 && true){
    console.log("Kewl, this will work")
  }
  
  
  // this makes it so they have to be different 
  // if i make condition 1 and 2 same, then it won't work since they have to be diff
  if (condition2 !== condition1){
    console.log("meow meow meow")
  }
  