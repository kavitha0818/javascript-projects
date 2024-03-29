const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newstring = str.slice(0,3);
console.log(newstring);

let newstring2 = str.slice(3);
console.log(newstring2);

let newstring3 = newstring2 + newstring
console.log(newstring3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Template literal ${newstring3}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userName = readlineSync.question('Hello,Please ');


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
