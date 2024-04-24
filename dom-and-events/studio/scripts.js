// Write your JavaScript code here.
// Remember to pay attention to page loading!

let rocketposx = 0;
let rocketposY = 0;
let altitude = 0;

window.addEventListener('load', function() {
    const takeoff = document.getElementById('takeoff');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const land = document.getElementById('landing');
    const rocket = document.getElementById('rocket');
    const missionAbort = document.getElementById('missionAbort');

    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '0px';

    takeoff.addEventListener('click', () => {
        const confirmed = confirm('Are you sure the shuttle is ready for takeoff');
        if(confirmed) {
            flightStatus.innerHTML = 'Shuttle in flight';
            spaceShuttleHeight.innerHTML = 10000;
            shuttleBackground.style.backgroundColor = 'blue';
            rocket.style.bottom = '10px';
            rocket.style.left = '10px';
        }
    });
    
    land.addEventListener('click', () => {
        const confirmed = confirm('The shuttle is landing. Landing gear engaged.');
        if(confirmed) {
            flightStatus.innerHTML = 'The shuttle has landed';
            spaceShuttleHeight.innerHTML = 0;
            shuttleBackground.style.backgroundColor = 'green';
            rocket.style.bottom = '10px';
            rocket.style.left = '10px';
        }
    });

    missionAbort.addEventListener('click', () => {
        const confirmed = confirm('Confirm that you want to abort the mission');
        if(confirmed) {
            flightStatus.innerHTML = 'Mission aborted';
            spaceShuttleHeight.innerHTML = 0;
            shuttleBackground.style.backgroundColor = 'green';
            rocket.style.bottom = '10px';
            rocket.style.left = '10px';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'left') {
            rocketposx -= 10;
            rocket.style.marginLeft = rocketposx + 'px';
        }
        if (event.target.id === 'right') {
            rocketposx += 10;
            rocket.style.marginLeft = rocketposx + 'px';
        }
        if (event.target.id === 'down') {
            rocketposY -= 10;
            rocket.style.marginBottom = rocketposY + 'px';
            altitude += 1000;
            spaceShuttleHeight.innerHTML = altitude;    
        }
        if (event.target.id === 'up') {
            rocketposY += 10;
            rocket.style.marginBottom = rocketposY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });
});
