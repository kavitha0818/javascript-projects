// Code your orbitCircumference function here:

function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);  
}


// Code your missionDuration function here:

function missionDuration(num_orbits, orbit_radius = 2000, orbital_speed = 28000) {
  const circumference = orbitCircumference(orbit_radius);
  const distance = num_orbits * circumference;
  const time_hours = distance / orbital_speed;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time_hours} hours to complete.`)
  return time_hours.toFixed(2);
}


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length)
  return arr[index]; 
}

// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log('missionDuration',missionDuration(2));