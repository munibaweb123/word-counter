#! /usr/bin/env node
// import inquirer from module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result of inquirer.prompt function.

const answer:{
    sentence:string
}=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"enter your sentence to count the words"
    }
]);
const words=answer.sentence.trim().split(" ")
console.log(words);
console.log(`The words in your sentence are: ${words.length}`)

