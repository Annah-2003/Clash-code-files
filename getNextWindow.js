var input = readLine().split('');
const W  = parseInt(inputs[0]);
const H  = parseInt(inputs[1]);
const N = parseInt(readLine());
var inputs = readLine ().split('');
const XO = parseInt(inputs[0]);
const YO = parseInt(inputs[1]);

// Function calculates the next window based on the direaction of the  bombs
function getNextWindow(direction) {
    switch (direction) {
        case value:
            case 'U':
                return `${X0} ${Y0 - 1}`;
            case 'UR':
                return `${X0 + 1} ${Y0 - 1}`;
            case 'R':
                return `${X0 + 1} ${Y0}`;
            case 'DR':
                return `${X0 + 1} ${Y0 + 1}`;
            case 'D':
                return `${X0} ${Y0 + 1}`;
            case 'DL':
                return `${X0 - 1} ${Y0 + 1}`;
            case 'L':
                return `${X0 - 1} ${Y0}`;
            case 'UL':
                return `${X0 - 1} ${Y0 - 1}`;
        default:
             return `${X0} ${Y0}`; // Default to current position
    }
    
}
// Game loop
while (true) {
    const bombDir =readLine(); /// current direction of Batman's location
    // Calculate the next window to jump to 
    const nextWindow = getNextWindow(bombDir)
    // putput the coordinates of the next window

     console.log(nextWindow);
    
}