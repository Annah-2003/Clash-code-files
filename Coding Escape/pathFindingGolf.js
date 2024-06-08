// Read input dimensions
var inputs = readline().split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

// Read the grid
const grid = [];
for (let i = 0; i < height; i++) {
    const line = readline(); // Read each line of the grid
    grid.push(line); // Store the line in the grid array
}

// Now you have the grid stored in the `grid` array
// You can access each cell of the grid using grid[row][col]

console.log(grid); // This is just for checking the grid; you can remove this line in your final solution
