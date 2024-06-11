var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' '); // split the array
let x0 = parseInt(inputs[0]);
let y0 = parseInt(inputs[1]);

let minX = 0;
let maxX = W - 1;
let minY = 0;
let maxY = H - 1;

while (true) {
    const bombDir = readline();

    if (bombDir.includes('U')) {
        maxY = y0 - 1;
    } else if (bombDir.includes('D')) {
        minY = y0 + 1;
    }

    if (bombDir.includes('L')) {
        maxX = x0 - 1;
    } else if (bombDir.includes('R')) {
        minX = x0 + 1;
    }

    x0 = Math.floor((minX + maxX) / 2);
    y0 = Math.floor((minY + maxY) / 2);

    console.log(`${x0} ${y0}`);
}
