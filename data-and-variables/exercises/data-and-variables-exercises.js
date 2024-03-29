// Declare and assign the variables below
//console.log('This is Kavitha');

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below


let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)
let kilometersToMars = 225000000
let milesPerKilometer = 0.621
let milesToMars = kilometersToMars * milesPerKilometer;
console.log(typeof milesToMars)
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(typeof hoursToMars)
let daysToMars = hoursToMars / 24;
console.log(typeof daysToMars)
console.log(typeof 3 == 4)
console.log(3 + 4 === 7)
console.log("false")
console.log(typeof 7 == "7");
console.log(typeof 0 == false);
console.log(typeof 0 == '')
console.log(typeof 7 === "7");
console.log(typeof 0 === false);
console.log(typeof 0 === '');
console.log(typeof 4 == "4");
console.log(shuttleName + " will take "+ daysToMars + " days to reach Mars.");
console.log(`${shuttleName} will take ${daysToMars} days to reach Mars.`);
let kilometersToMoon  = 38400;
let milesToMoon = kilometersToMoon * milesPerKilometer;
console.log(milesToMoon)
let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log(hoursToMoon)
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon)
console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon.`);
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }
 if (crewStatus) {
    console.log("Crew Ready");
  } else {
    console.log("Crew Not Ready");
  }
  if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }let num = 7;

 if (num % 2 === 0) {
     if (num % 2 === 1) {
         console.log("odd");
     }
 }
 if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}


let jsCreator = "Brendan Eich";
let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];

let outputStr = "JavaScript was created by somebody with initials " + 
   firstInitial + "." +
   lastInitial + ".";

console.log(outputStr);

console.log(jsCreator[-1]);
console.log(jsCreator[42]);
let phrase = 'Code for fun'
console.log(phrase2)
console.log(phrase[phrase.length - 8]);