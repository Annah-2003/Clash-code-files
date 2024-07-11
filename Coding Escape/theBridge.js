

const M = parseInt(readline()); // the amount of motorbikes to control
const V = parseInt(readline()); // the minimum amount of motorbikes that must survive
const L0 = readline(); // L0 to L3 are lanes of the road. A dot character . represents a safe space, a zero 0 represents a hole in the road.
const L1 = readline();
const L2 = readline();
const L3 = readline();

// game loop
while (true) {
    const S = parseInt(readline()); // the motorbikes' speed
    for (let i = 0; i < M; i++) {
        var inputs = readline().split(' ');
        const X = parseInt(inputs[0]); // x coordinate of the motorbike
        const Y = parseInt(inputs[1]); // y coordinate of the motorbike
        const A = parseInt(inputs[2]); // indicates whether the motorbike is activated "1" or detroyed "0"
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line containing one of 6 keywords: SPEED, SLOW, JUMP, WAIT, UP, DOWN.
    console.log('SPEED');
}
