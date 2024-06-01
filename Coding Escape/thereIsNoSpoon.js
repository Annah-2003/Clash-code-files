const width = parseInt(readLine);
const height = parseInt(readLine);
const grid =[];

// Read the grid and store it in an array
for (let i= 0; i <height ; i++){
    const line = readLine ();
    grid.push(line.split(''));
}
// Fumction to check is a cell valid 
const isValidCell = ( x,y) =>{
    return x >=  0 && x < width && y >= 0 && y < height;
}
