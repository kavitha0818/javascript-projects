// Import the modules exported from practiceExports.js below:

function randomFromArray(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }
 const input = require('readline-sync');
 const printAll = require('./display.js'); 
 printAll(astronauts, testTitles, scores);
 let avg = averages.averageForStudent(j, scores
);
for (let j = 0; j < testTitles.length; j++) {
    let testAverage = averages.averageForTest(j, scores);
    console.log(`Average score for ${testTitles[j]}: ${testAverage}`);
}

// Call averageForStudent to print each astronaut’s average score
for (let i = 0; i < astronauts.length; i++) {
    let avg = averages.averageForStudent(i, scores);
    console.log(`Average score for ${astronauts[i]}: ${avg}`);
}

// Call randomSelect to pick the next spacewalker from the astronauts array
let nextSpacewalker = randomSelect.randomFromArray(astronauts);
console.log(`Next spacewalker: ${nextSpacewalker}`);