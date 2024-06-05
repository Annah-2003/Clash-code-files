var inputs = readline(' ');
const nbFloors = parseInt(inputs[0]);
const width = parseInt(inputs[1]);
const nbRounds = parseInt(inputs[2]);
const exitFloors = parseInt(inputs[3]);
const exitPos = parseInt(inputs[4]);
const nbTotalCones = parseInt(inputs[5]);
const nbAdditionalElevators = parseInt(inputs[6]);
const nbElevators = parseInt(inputs[7]);

// store elevator positions 
const elevators = {};
for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    elevators[elevatorFloor] = elevatorPos;
    
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT

    if (cloneFloor === -1) {
        // No clone to control, so wait
        console.log('WAIT');
        continue;
} 
// Determine the target position
let targetPos;
if (cloneFloor === exitFloor) {
    targetPos = exitPos;
} else {
    targetPos = elevators[cloneFloor];
}

// Decide whether to block or wait
if ((direction === "RIGHT" && clonePos > targetPos) ||
    (direction === "LEFT" && clonePos < targetPos)) {
    console.log('BLOCK');
} else {
    console.log('WAIT');
}
}