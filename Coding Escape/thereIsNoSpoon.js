const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
const grid = []; // Initialize an array to store the grid

// Read the grid and store it in the array
for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    grid.push(line.split('')); // Split the line into an array and push it to the grid array
}

// Function to check if a cell is valid
const isValidCell = (x, y) => {
    return x >= 0 && x < width && y >= 0 && y < height;
}

// Function to find the right neighbor of a power node
const findRightNeighbor = (x, y) => {
    for (let i = x + 1; i < width; i++) {
        if (grid[y][i] === '0') {
            return [i, y];
        }
    }
    return [-1, -1]; // If no neighbor is found
}

// Function to find the bottom neighbor of a power node
const findBottomNeighbor = (x, y) => {
    for (let i = y + 1; i < height; i++) {
        if (grid[i][x] === '0') {
            return [x, i];
        }
    }
    return [-1, -1]; // If no neighbor is found
}

// Iterate through the grid to find power nodes and their neighbors
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (grid[y][x] === '0') {
            const rightNeighbor = findRightNeighbor(x, y);
            const bottomNeighbor = findBottomNeighbor(x, y);
            console.log(`${x} ${y} ${rightNeighbor[0]} ${rightNeighbor[1]} ${bottomNeighbor[0]} ${bottomNeighbor[1]}`);
        }
    }
}
