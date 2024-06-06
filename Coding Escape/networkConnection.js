const N = parseInt(readline());
let buildings = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    buildings.push({x: X, y: Y});
    
}

// Sort buildings by their x-coordinates to find the min and max values
buildings.sort((a,b)=> a.x - b.x);
const minX = buildings[0].X;
const maxX = buildings[N - 1].x;

// Extract y-coordinates and sort them to find the median y value 
let yCoordinates = buildings.map(building => building.y);
yCoordinates.sort((a, b) => a - b);
const medianY = yCoordinates[Math.floor(N / 2)];

// Calculate the total length of the main cable
const mainCableLength = maxX - minX;

// Calculate the total length of the dedicated cables
let dedicatedCablesLength = 0;
for (let i = 0; i < N; i++) {
    dedicatedCablesLength += Math.abs(buildings[i].y - medianY);
}

// The total length is the sum of the main cable and the dedicated cables
const totalLength = mainCableLength + dedicatedCablesLength;

console.log(totalLength);