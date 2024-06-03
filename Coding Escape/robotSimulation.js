const magicPhrase = readline();

let currentZone = 0;
let commands =[];

// Function to move Blub to a specific zonw
function moveToZone(targetZone){
    while (currentZone !== targetZone){
        if(targetZone > currentZone){
        commands.push('>');
        currentZone++;
        }
        else{
            commands.push('<')
            currentZone--;
        }
    }

}

//Function to get the minimum steps to reach target character from current character
function getMinSteps(currentChar, targetChar) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    const currentIndex = alphabet.indexOf(currentChar);
    const targetIndex = alphabet.indexOf(targetChar);

    let forwardSteps = targetIndex >= currentIndex ? targetIndex - currentIndex : 27 - (currentIndex - targetIndex);
    let backwardSteps = currentIndex >= targetIndex ? currentIndex - targetIndex : 27 - (targetIndex - currentIndex);

    return forwardSteps <= backwardSteps ? ['+', forwardSteps] : ['-', backwardSteps];
}

// We start from zone 0 
let currentChar = Array(30).fill(' ')

for (let i = 0; i < magicPhrase.length; i++) {
    let targetChar = magicPhrase[i];

    // Move to the current zone (we use i % 30 to loop around the 30 zones)
    moveToZone(i % 30);

    // Get the minimum steps to reach the target character
    let [operation, steps] = getMinSteps(currentChars[currentZone], targetChar);

    // Apply the operations to adjust the rune
    for (let j = 0; j < steps; j++) {
        commands.push(operation);
    }

    // Update the current character in the zone
    currentChars[currentZone] = targetChar;

    // Trigger the rune to add the character to the output
    commands.push('.');
}
 // outpu commands
 console.log(commands.join(' '));