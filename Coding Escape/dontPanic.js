// Parse initial configuration.
var inputs = readline().split(' ');
const nbFloors = parseInt(inputs[0]); // number of floors
const width = parseInt(inputs[1]); // width of the area
const nbRounds = parseInt(inputs[2]);// floor on which the exit is found
const exitFloor = parseInt(inputs[3]); // position of the xit  on its floor
const exitPos = parseInt(inputs[4]); // number of generated clones
const nbTotalClones = parseInt(inputs[5]);
const nbAdditionalElevators = parseInt(inputs[6]);
const nbElevators = parseInt(inputs[7]);

// store elevators positions
const elevators = {};
for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    elevators[elevatorFloor] = elevatorPos;
    
}

// Game loop
while (true) {
    var inputs = readline().split(' ')
    const cloneFloor = parseInt([0]);
    const clonePos = parseInt([1]);
    const direction = parseInt([2]);

    if (cloneFloor == -1) {
        console.log('WAIT');
        continue;
    }

    let targetPos;
    if (cloneFloor == exitFloor) {
        targetPos = exitPos;
    } else {
        targetPos = elevators[cloneFloor];
    }

    let block = false;
    if (direction == 'LEFT' && clonePos < targetPos) {
        block = true;
    }
    if (direction == 'RIGHT' && clonePos > targetPos) {
        block = true;
    }

    if (block) {
        console.log('BLOCK');
    } else {
        console.log('WAIT');
    }

    
}