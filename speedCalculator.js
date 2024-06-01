const numberSnails = parseInt(readLine());

// Read the speed of each snail 
const sppeds = [];
for (let i = 0; i< numberSnails; i++){
    speeds.push(parseInt(readLine))

}

// Read the dimensions of tge map
const mapHeight = parseInt(readLine);
const mapWidth = parseInt(readLine);

// Read the map itself
const map = [];
let destination = null;
let snailPositions =[]

for (let i = 0; i < mapHeight; i++) {
    const row = readline();
    map.push(row);
    for (let j = 0; j < mapWidth; j++) {
        const cell = row[j];
        if (cell >= '1' && cell <= '6') {
            snailPositions[parseInt(cell) - 1] = { x: j, y: i };
        } else if (cell === '#') {
            destination = { x: j, y: i };
        }
    }
}
 // Function to perform BFS and return the time taken for a snail to reach its destination
 function bfs(snailStart, speed) {
    const queue = [{ x: snailStart.x, y: snailStart.y, time: 0 }];
    const visited = Array.from({ length: mapHeight }, () => Array(mapWidth).fill(false));
    visited[snailStart.y][snailStart.x] = true;

    while (queue.length > 0) {
        const { x, y, time } = queue.shift();

        if (x === destination.x && y === destination.y) {
            return time;
        }

        for (const { dx, dy } of directions) {
            const newX = x + dx * speed;
            const newY = y + dy * speed;

            if (
                newX >= 0 && newX < mapWidth &&
                newY >= 0 && newY < mapHeight &&
                !visited[newY][newX] &&
                map[newY][newX] !== '1' && map[newY][newX] !== '2' && 
                map[newY][newX] !== '3' && map[newY][newX] !== '4' && 
                map[newY][newX] !== '5' && map[newY][newX] !== '6'
            ) {
                visited[newY][newX] = true;
                queue.push({ x: newX, y: newY, time: time + 1 });
            }
        }
    }
    return Infinity; // If the destination is unreachable
}

// Calculate the time for each snail to reach the destination
let minTime = Infinity;
let winner = -1;

for (let i = 0; i < numberSnails; i++) {
    const time = bfs(snailPositions[i], speeds[i]);
    if (time < minTime) {
        minTime = time;
        winner = i + 1;
    }
}

console.log(winner);
