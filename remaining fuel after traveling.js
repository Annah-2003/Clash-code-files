/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const f = parseInt(readline());
const d = parseInt(readline());
const r = parseInt(readline());

// Calculate the fuel consumed during the journey
const fuelConsumed = d * r;

// Calculate the remaining fuel
const remainingFuel = f - fuelConsumed;

// Check if there's enough fuel
if (remainingFuel >= 0) {
    console.log(remainingFuel); // Output remaining fuel
} else {
    console.log('not enough fuel'); // Output if not enough fuel
}
