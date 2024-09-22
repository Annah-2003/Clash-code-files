function reverse(x) {
    // DEfine the 32 bit signed integer with range limits
    const MAX_INT = Math.pow(2, 31) -1;
    const MIN_INT = -Math.pow(2, 31);

    // Get the sign of the number and reverse the absolute value
    let sign = Math.sign(x);
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));


//Restore the original sign to the reveersed number 
reversed = sign * reversed;

// Check if the reversed number is within  the 32-bit signed integer range
if (reversed > MAX_INT || reversed < MIN_INT) {
    return 0;
}
}