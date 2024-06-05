const MESSAGE = readline()

// convert each character to its 7 bit binary reprsentation
let binaryMessage = Array.from(MESSAGE)
    .map(char =>char.charCodeAt(0).toString(2).padStart(7,'0'))
    .join('');

// encode  the binary message using unary method
let encodedMessage = '';
let i = 0;

while  (i < binaryMessage.length) {
    let bit = binaryMessage[i];
    let count = 0;

    // Count the number of consecutive identical bits
  while (i < binaryMessage.length && binaryMessage[i] === bit) {
    count++;
    i++;
  }
  // Append the unary encoding
  if (bit === '1') {
    encodedMessage += '0 ' + '0'.repeat(count) + ' ';
  } else {
    encodedMessage += '00 ' + '0'.repeat(count) + ' ';
  }
}

// Remove the trailing space
encodedMessage = encodedMessage.trim();

console.log(encodedMessage);