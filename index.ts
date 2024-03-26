#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate random number
// 2) user input for guessing number 
// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() *6 + 1);
//console.log(randomNumber);
console.log("welcome to Number Guessing Game");

const answers = await inquirer.prompt([
    {
    name:"userGuessNumber",
    type:"number",
    message:"please Guess a Number between 1-6:",
  },
]);
//console.log(answers);

if(answers.userGuessNumber === randomNumber ){
     console.log("congratulation! you guessed right number.");
}else {
       console.log("you guessed wrong number");
}




