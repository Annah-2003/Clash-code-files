// read the grid
let grid = [];
for (let i = 0; i < 10; i++) {
    grid.push(readline().split(' '));
    
}
// Read the number of robots
const robotCount = parseInt(readline());
let robots = [];
for (let i = 0; i < robotCount; i++) {
    const inputs = readline().split(' ');
    const x= parseInt(inputs[0]);
    const y= parseInt(inputs[1]);
    const direction= (inputs[2]);
    robots.push({x,y, direction});
    
}

// Directions mapping
const directions = {
    U: { dx: 0, dy: -1 },
    R: { dx: 1, dy: 0 },
    D: { dx: 0, dy: 1 },
    L: { dx: -1, dy: 0 }

};

// Place arrows to keep robots on platform and avoid voids
let actions = [];

robots.forEach(robot=> {
    const { x, y, direction } = robot;
    let placed = false;

    // Define preferred order of arrow placement
    const order = ['R', 'D', 'L', 'U'];
    for (let dir of order) {
        const { dx, dy } = directions[dir];
        const nx = (x + dx + 19) % 19;
        const ny = (y + dy + 10) % 10;
        
        if (grid[ny][nx] === '.' && !placed) {
            actions.push(`${x} ${y} ${dir}`);
            placed = true;
        }
    }
});

// Printing action
console.log(actions.join);