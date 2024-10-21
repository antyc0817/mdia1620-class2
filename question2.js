const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

/* Planning-------------------------------------------

2 variables: studentName and studentScore
question: what is your name? 
question 2: what is the score you got on your exam?

score >= 86 This student got an A
score >= 72 && score <= 85 This student got an B
score >= 60 && score <= 71 This student got an C
score >= 50 && score <= 59 This student needs improvment
score <50 THis student has failed 

The function would be named grade score and two variables. 
the name and score

-----------------------------------------------------*/

//determine a proper function name and parameter variable name
function gradeScore(name, score){

  let _studentName=name
  let _studentScore=score
  
  if (_studentScore>=86){
    console.log(`${name} Excelletnt! You got an A`);
  } else if (_studentScore >= 72 && _studentScore <= 85){
    console.log(`${name} Great Job, You got an B`);
  } else if (_studentScore >= 60 && _studentScore <= 71){
    console.log(`${name} Good effot You got a C`);
  } else if (_studentScore>=50 && _studentScore<=59){
    console.log(`${name} Need improvment You got a D`);
  } else if (_studentScore<50){
    console.log(`${name} See me after class please You got a F`);
  }
  
}



function StartApp(){
  readline.question('Hello, what is your name?', _name => {
    readline.question('What score did you get on your exam?', _score => {

      //call your function here.

      gradeScore(_name,_score)

      // readline.close();
      if(_score !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();