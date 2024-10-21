const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

/* Planning________________-
4 variables- 
name
money they have
lunch item 
cost of item

two outcome
if they have enough money = item purchase
if they don't have enough money= need more money
note they set the price of the cost of item since its 4 input

question1 What is your name and number
question2 How much money do you have
question3 What would you like to buy
question4 How much does the item cost

if varaible 2>4 they can buy the item
if varaible 2<4 They won't be able to buy the item

function would be called lunchmoney

*/

//determine a proper function name and parameter variable name
function lunchmoney(studentname, studentcost, itemname, itemcost) {
 
  if (studentcost >= itemcost) {
    console.log(`${studentname} purchased ${itemname} successfully!`);
  } else {
    console.log(`${studentname} does not have enough money to buy ${itemname}!`);
  }

  
}

function StartApp() {
  readline.question('Hello, What is your student name?', _studentname => {
    readline.question('How much money do you currently have?', _studentcost => {
      readline.question('What would you like to buy?', _itemname => {
        readline.question('How much does that item cost?', _itemcost => {
          
          let studentcost = Number(_studentcost);
          let itemcost = Number(_itemcost);

          
          lunchmoney(_studentname, studentcost, _itemname, itemcost);


          // readline.close();
          if(_itemcost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();