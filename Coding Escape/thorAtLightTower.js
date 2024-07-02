var inputs = readline().split(' ');
const LX = parseInt(inputs[0]); // the X point of the light tower
const LY = parseInt(inputs[1]); // the Y point of the light tower
let thorX = parseInt(inputs[2]); // Thor's starting X position 
let thorY = parseInt(inputs[3]); // Thor's starting Y position

// game loop 
while (true) {
    const remainingTurns = parseInt(readline()); // The level of Thor's remaining energy 
    let directionX = '' ;
    let directionY = '' ;

    if (thorX > LX) directionX = 'W';
    else if (thorX < LX) directionX = 'E';

    if (thorY > LY) directionY = 'N';
    else if (thorY < LY) directionY = 'S';

    if (directionY === 'N') thorY--;
    else if (directionY === 'S') thorY++;
    
    if (directionX === 'W') thorX--;
    else if (directionX === 'E') thorX++;

    // OUTPUT THE CHOSEN DIRECTION
    console.log(directionY + directionX);
}
