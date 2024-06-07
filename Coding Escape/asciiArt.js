// parse the input 
const  L= parseInt(readline()); // width of a letter
const  H= parseInt(readline());// Height of a letter
const  T= parseInt(readline().toUpperCase()) // text to be converted to uppercase 

// Read the ascii art rows 
const asciiArtRows = [];
for (let i = 0; i < H; i++) {
   asciiArtRows.push(readline());
    
}

// Function to get the ASCII art index for a character 
function getCharIndex(char){
    const charCode = char.charCode(0);
    if (charCode >= 65 && charCode <= 90) {
        // 'A' to 'Z' maps to 0 to 25
        return charCode - 65;
    } else {
        // Any other character maps to '?', which is at index 26
        return 26;
    }

}