// Read surface data (though it's not needed for this level)
const surfaceN = parseInt(readline());
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]);
    const landY = parseInt(inputs[1]);
}

// Game loop
while (true) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]);
    const vSpeed = parseInt(inputs[3]);
    const fuel = parseInt(inputs[4]);
    const rotate = parseInt(inputs[5]);
    const power = parseInt(inputs[6]);

    // Calculate required thrust power to control vertical speed
    let desiredPower;
    if (vSpeed <= -40) {
        desiredPower = 4;
    } else if (vSpeed <= -30) {
        desiredPower = 3;
    } else if (vSpeed <= -20) {
        desiredPower = 2;
    } else if (vSpeed <= -10) {
        desiredPower = 1;
    } else {
        desiredPower = 0;
    }

    // Ensure power increment/decrement is within allowed range
    desiredPower = Math.min(desiredPower, power + 1);
    desiredPower = Math.max(desiredPower, power - 1);

    // Output the desired rotation (0) and thrust power
    console.log(`0 ${desiredPower}`);
}
