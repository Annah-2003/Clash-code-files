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